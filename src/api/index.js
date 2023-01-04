import axios from 'axios';

export const status = {
  rejected: 0,
  resolved: 1,
  pending: 2,
};

export async function getMenu(setFetchMenu) {
  setFetchMenu({
    status: status.pending,
    menu: [],
  });
  try {
    const response = await axios.get(
      'https://meal-app-eee91-default-rtdb.europe-west1.firebasedatabase.app/menu.json',
    );
    const menu = response.data;
    const menuArray = Object.entries(menu).map(([id, itemElements]) => ({
      id,
      ...itemElements,
    }));

    setFetchMenu({
      status: status.resolved,
      menu: menuArray,
    });
  } catch (error) {
    setFetchMenu({
      status: status.rejected,
      menu: [],
    });
    console.error(error);
  }
}
