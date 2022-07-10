import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export const useQueryRouter = (VIEWS: { label: string; id: string }[]) => {
  const router = useRouter();
  const [view, setInnerView] = useState(0);

  useEffect(() => {
    const { view } = router.query;
    if (!view) {
      router.query.view = VIEWS[0].id;
      router.push(router);
    }
  }, []);

  const setView = (id: number) => {
    router.query.view = VIEWS[id].id;
    router.push(router);
  };

  useEffect(() => {
    const id = VIEWS.findIndex(({ id }) => id == router.query.view);
    setInnerView(id);
  }, [router.query.view]);

  return { view, setView };
};
