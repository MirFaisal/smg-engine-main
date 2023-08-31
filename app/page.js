import NoticeCreate from "@/components/NoticeCreate";
import PrivateRoutes from "@/routes/PrivateRoute";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PrivateRoutes>
      <main>
        <div className="flex w-full h-screen justify-center items-center">
          
        </div>
      </main>
    </PrivateRoutes>
  );
}
