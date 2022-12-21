// Aqui Realizamos la Peticion
import { urlFetch } from "../constans";

export const GitHubUser = async (user) => {
   try {
      const response = await fetch(`${urlFetch}${user}`, {
         method: "GET",
      });

      const payload = await response.json();
      return payload;
   } catch (error) {
      console.log(error);
   }
};
