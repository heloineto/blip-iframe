import { Demo } from '@mantine/ds';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { MdxDataTable } from './MdxDataTable/MdxDataTable';
import { MdxInfo } from './MdxInfo/MdxInfo';
import { MdxInstallScript } from './MdxInstallScript/MdxInstallScript';
import { MdxKeyboardEventsTable } from './MdxKeyboardEventsTable/MdxKeyboardEventsTable';
import { MdxLink } from './MdxLink/MdxLink';
import { MdxNpmScript } from './MdxNpmScript/MdxNpmScript';
import { MdxPackagesInstallation } from './MdxPackagesInstallation/MdxPackagesInstallation';
import { MdxPre } from './MdxPre/MdxPre';
import {
  MdxComboboxData,
  MdxComboboxDisclaimer,
  MdxComboboxFiltering,
  MdxComboboxLargeData,
  MdxComboboxProps,
  MdxFlexboxGapSupport,
  MdxGetElementRef,
  MdxGradient,
  MdxInputAccessibility,
  MdxInputFeatures,
  MdxPolymorphic,
  MdxStylesApiSelectors,
  MdxTargetComponent,
} from './MdxSharedContent';
import { h } from './MdxTitle/MdxTitle';
import {
  MdxCode,
  MdxLi,
  MdxParagraph,
  MdxUl,
} from './MdxTypography/MdxTypography';

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider
      components={{
        Demo,
        GetElementRef: MdxGetElementRef,
        Polymorphic: MdxPolymorphic,
        InputFeatures: MdxInputFeatures,
        InputAccessibility: MdxInputAccessibility,
        FlexboxGapSupport: MdxFlexboxGapSupport,
        Gradient: MdxGradient,
        StylesApiSelectors: MdxStylesApiSelectors,
        DataTable: MdxDataTable,
        TargetComponent: MdxTargetComponent,
        KeyboardEventsTable: MdxKeyboardEventsTable,
        InstallScript: MdxInstallScript,
        PackagesInstallation: MdxPackagesInstallation,
        NpmScript: MdxNpmScript,
        ComboboxDisclaimer: MdxComboboxDisclaimer,
        ComboboxData: MdxComboboxData,
        ComboboxLargeData: MdxComboboxLargeData,
        ComboboxFiltering: MdxComboboxFiltering,
        ComboboxProps: MdxComboboxProps,
        pre: MdxPre,
        h1: h(1),
        h2: h(2),
        h3: h(3),
        h4: h(4),
        h5: h(5),
        h6: h(6),
        a: MdxLink,
        p: MdxParagraph,
        li: MdxLi,
        ul: MdxUl,
        blockquote: MdxInfo,
        code: MdxCode,
      }}
    >
      {children}
    </MDXProvider>
  );
}
