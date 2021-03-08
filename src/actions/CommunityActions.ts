import { ICommunityResponse } from "../types/ResponseTypes";
import { apios } from "../utils/Apios";

export const FetchCommunitiesAction = async () => {
  const { data } = await apios.get<ICommunityResponse>("/community");

  return data.communities;
};
