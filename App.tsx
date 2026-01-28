import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Solucoes from "./pages/Solucoes";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import Sobre from "./pages/Sobre";
import Clientes from "./pages/Clientes";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/solucoes"} component={Solucoes} />
      <Route path={"/cases"} component={Cases} />
      <Route path={"/case-detail/:id"} component={CaseDetail} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/clientes"} component={Clientes} />
      <Route path={"/contato"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
