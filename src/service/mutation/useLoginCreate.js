import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";
import { saveState } from "../../config/storege";

export const useLoginCreate = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
    onSuccess: () => {
      saveState("userData");
      
    },
    onError: () => {
      
    },
  });
};

