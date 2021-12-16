import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterConfig } from "./navigation/RouterConfig";

// Styles
import "./styles/global.css";

const queryClient = new QueryClient();

const App = function () {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback="loading">
          <RouterConfig />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default App;
