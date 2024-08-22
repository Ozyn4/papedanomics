import { theme } from '@/theme';
import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import 'mantine-react-table/styles.css'; //import MRT styles

export const metadata = {
  title: 'Strategi Penguatan Pariwisata',
  description: 'Strategi Penguatan Pariwisata',
};

export default async function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          {/* <Provider> */}
            {children}
          {/* </Provider> */}
        </MantineProvider>
      </body>
    </html>
  );
}
