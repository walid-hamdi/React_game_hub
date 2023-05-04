import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import platformService, { Platform } from "../services/platformService";

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const { request, cancel } = platformService.getAll();
    setLoading(true);
    request
      .then((res) => {
        setPlatforms(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatforms;
