export const useSearch = () => {
  const search = ref("test");

  const onLoad = () => {};

  const onCreate = () => {
    console.log(search.value);
    /* window.location.replace("/search"); */
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
