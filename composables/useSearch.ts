/* export const useSearch = () => {
  const search = ref("");

  const onLoad = () => {};

  const onCreate = () => {
    console.log(search.value);
    
  };

  const onUpdate = () => {};

  const onDelete = () => {};

  return {
    search,
    onLoad,
    onCreate,
    onUpdate,
    onDelete,
  };
};
 */
export const useSearch = () => useState<string>("search", () => ref(""));
