import axios from 'axios';
import https from 'https';
import { ConvertFlowToApplication } from '../utils/convertFlow';
import { PayloadsRequests } from './Flow/commands';
import { CheckResponse } from './Flow/reponse';
import { GetConfiguration, GetLastDate } from './all-blip-commands';

const commandsUrl = 'https://msging.net/commands';
const agent = new https.Agent({
  rejectUnauthorized: false,
});

type SelectListBotsItem = {
  value: unknown;
  key: string;
  original_key: string;
};

const RequestPublicFlow = async (
  JsonFlowIn: Record<string, unknown>,
  Select_List_Bots: SelectListBotsItem[]
) => {
  try {
    const log = [];

    await Promise.all(
      Select_List_Bots.map(async (item) => {
        const { value, key, original_key } = item;

        const typeConfiguration = await GetConfiguration(value, key);
        const latestDate = await GetLastDate(key);

        const application = await ConvertFlowToApplication(
          original_key,
          key,
          JsonFlowIn
        );

        const payload = PayloadsRequests({
          typeConfiguration,
          application,
          JsonFlowIn,
          latestDate,
        });

        axios
          .all([
            axios.post(commandsUrl, payload.setConfiguration, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
            axios.post(commandsUrl, payload.setWorkingFlow, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
            axios.post(commandsUrl, payload.setWorkingConfig, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
            axios.post(commandsUrl, payload.setPublishedFlow, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
            axios.post(commandsUrl, payload.setPublishedConfig, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
            axios.post(commandsUrl, payload.setLatestPublications, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
            axios.post(commandsUrl, payload.setLastInsertedIndex, {
              headers: {
                Authorization: key,
                'Content-Type': 'application/json',
              },
              httpsAgent: agent,
            }),
          ])
          .then(
            axios.spread(async (...responses) => {
              await CheckResponse(
                responses,
                value,
                log,
                Select_List_Bots,
                'flow'
              );
            })
          )
          .catch(async (error) => {
            await CheckResponse(
              error.response.status,
              value,
              log,
              Select_List_Bots,
              'flow'
            );
          });
      })
    );
  } catch (error) {
    // showToast(ToastTypes.DANGER, 'Error');
    console.log(error);
  }
};

export { RequestPublicFlow };
