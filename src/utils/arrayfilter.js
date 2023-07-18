export function filterArrayByDate(arr, date) {
  const filteredRepositories = arr.filter((repo) => {
    const lastUpdateDate = new Date(repo.updated_at);
    return lastUpdateDate > date;
  });

  return filteredRepositories;
}
