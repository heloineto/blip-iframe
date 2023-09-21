import { blip } from 'blip-iframe';
import Command from './components/Command';

const Home = () => {
  return (
    <div>
      <Command label="getApplication()" command={() => blip.getApplication()} />
      <Command label="getTickets()" command={() => blip.getTickets()} />
      <Command
        label="getThreads()"
        command={() =>
          blip.getThreads({
            identity:
              '73990c0f-85af-41e0-b206-fdc6ca4a33fe.solutionslabrouter@0mn.io',
            messageId: undefined,
            storageDate: undefined,
            ownerIdentity: 'solutionslabrouter@msging.net',
          })
        }
      />

      {/* async getThreads(
        identity: string,
        messageId: string,
        skipDate: string,
        take: number = 100,
        ownerIdentity: string = undefined,
        getFromOriginator: boolean
    ) {
        const messageIdQueryString = messageId ? `&messageId=${encodeURIComponent(messageId)}` : '';
        const storageDateQueryString = skipDate ? `&storageDate=${skipDate}` : '';
        const getFromOriginatorQuery = getFromOriginator ? '&getFromOriginator=true' : '';
        const identityString = encodeURIComponent(identity);

        let uri = '';
        if (ownerIdentity && !getFromOriginator) {
            uri += `lime://${ownerIdentity}`;
        }

        const isGetThreadMessageMergedEnabled = await AttendanceFeatures.isGetThreadMessageMergedEnabled();
        const uriBase = isGetThreadMessageMergedEnabled ? 'threads-merged' : 'threads';
        uri += `/${uriBase}/${identityString}?$take=${take}&direction=desc&refreshExpiredMedia=true`
            + messageIdQueryString + storageDateQueryString + getFromOriginatorQuery;

        const resource = await this.MessagingHubService.sendCommand({
            method: 'get',
            uri
        });

        let items = [];

        if (resource && resource.items && resource.items.length > 0) {
            const doItemsHaveSameId = (item1, item2) => {
                return item1.id === item2.id;
            };

            items = uniqueElementsBy(resource.items, doItemsHaveSameId);
        }

        return {
            ...resource,
            items
        };
    } */}
    </div>
  );
};

export default Home;
