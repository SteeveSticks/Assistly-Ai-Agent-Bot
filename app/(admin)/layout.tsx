import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <Header />

      <div className="flex flex-col flex-1 lg:flex-row bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1 flex justify-center lg:justify-start items-start max-w-3xl mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
