import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Heemskerk from "./pages/Heemskerk.tsx";
import Uitgeest from "./pages/Uitgeest.tsx";
import Beverwijk from "./pages/Beverwijk.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import WatKostGlazenwasser from "./pages/blog/WatKostGlazenwasser.tsx";
import HoeVaakRamenLatenWassen from "./pages/blog/HoeVaakRamenLatenWassen.tsx";
import WatIsOsmoseGlasbewassing from "./pages/blog/WatIsOsmoseGlasbewassing.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/glasbewassing-heemskerk" element={<Heemskerk />} />
          <Route path="/glasbewassing-uitgeest" element={<Uitgeest />} />
          <Route path="/glasbewassing-beverwijk" element={<Beverwijk />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/wat-kost-glazenwasser" element={<WatKostGlazenwasser />} />
          <Route path="/blog/hoe-vaak-ramen-laten-wassen" element={<HoeVaakRamenLatenWassen />} />
          <Route path="/blog/wat-is-osmose-glasbewassing" element={<WatIsOsmoseGlasbewassing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
