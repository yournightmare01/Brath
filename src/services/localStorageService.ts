const LocalStorageService = {
  addUser: (userToken: string): void => {
    localStorage.setItem('user', userToken);
  },

  getUser: (): string | null => localStorage.getItem('user'),

  removeUser: (): void => localStorage.removeItem('user'),
};

export default LocalStorageService;
