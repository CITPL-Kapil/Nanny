import ReduxWrapper from "@/redux/ReduxWrapper";
import "./globals.css";
import GlobalThemeProvider from "@/components/styles/GlobalThemeProvider";


export const metadata = {
  title: "NannyPoppinz",
  description: "NannyPoppinz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{padding:0,margin:0}}>
      <ReduxWrapper>
       <GlobalThemeProvider>
          {children}
       </GlobalThemeProvider>
      </ReduxWrapper>
      </body>
    </html>
  );
}
