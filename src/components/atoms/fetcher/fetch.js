import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export async function costumeFetcher([url, token]) {
  //Token können hier API-Parameter sein. Sie werden von swr chached und sind teil des Keys.
  const response = await fetch(url, {
    body: JSON.stringify(token),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  const res = await response.json();
  return res;
}

const basicFetcher = (url) => fetch(url).then((res) => res.json());

export const useGetPages = ({ initialData, slug, preview }) => {
  console.log("useGetPages wurde angefragt für: ", slug);
  console.log("Preview ist: ", preview);
  const token = { slug: slug, preview: preview };
  return useSWR(
    [`api/pages`, token],
    costumeFetcher,
    {
      fallbackData: initialData,
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false,
    }
  );
};

export const useGetAllPosts = ({ initialData, offset, preview }) => {
  const getKey = (index, previousPageData) => {
    return [`api/posts`, { offset: index * 2, preview: preview }];
  };
  const results = useSWRInfinite(
    getKey,
    costumeFetcher,
    {
      fallbackData: initialData,
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false,
    }
  );
  //Validate, if End is reached
  let hitEnd = false;
  const { data } = results;
  if (data) {
    hitEnd = data[data.length - 1].length === 0;
  }
  return { ...results, hitEnd };
};

export const useGetAllInserate = ({ initialData, offset, preview }) => {
  const getKey = (index, previousPageData) => {
    return [`api/touren`, { offset: index * 4, preview: preview }];
  };
  const results = useSWRInfinite(
    getKey,
    costumeFetcher,
    {
      fallbackData: initialData,
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false,
    }
  );
  //Validate, if End is reached
  let hitEnd = false;
  const { data } = results;
  if (data) {
    hitEnd = data[data.length - 1].length <= 1;
  }
  return { ...results, hitEnd };
};

{
  /*
Via useSWR kannst Du die data cleint Side neu fetchen und validieren.
Auf Page leven den folgenden Syntax einfügen.
Statt pages-Data muss dann revalidatedPages gerendered werden.

const { data: revalidatedPages, error } = useGetPages({
    initialData: pages,
    slug: "index",
  });
*/
}
