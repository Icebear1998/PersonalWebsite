import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const SupabaseTest = () => {
  const [connectionStatus, setConnectionStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .limit(1);

        if (error) {
          setConnectionStatus("error");
          setErrorMessage(error.message);
          return;
        }

        setConnectionStatus("success");
        console.log("Successfully connected to Supabase:", data);
      } catch (error) {
        setConnectionStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Supabase Connection Test</h2>
      {connectionStatus === "loading" && (
        <div className="text-blue-600">Testing connection...</div>
      )}
      {connectionStatus === "success" && (
        <div className="text-green-600">
          Successfully connected to Supabase!
        </div>
      )}
      {connectionStatus === "error" && (
        <div className="text-red-600">
          Error connecting to Supabase: {errorMessage}
        </div>
      )}
    </div>
  );
};

export default SupabaseTest;
