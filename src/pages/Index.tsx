import { Calculator } from "../components/Calculator";
import { EmbedCode } from "../components/EmbedCode";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <Calculator />
          <div className="pt-8 border-t">
            <EmbedCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;