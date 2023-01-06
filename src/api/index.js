import axios from 'axios';

export const status = {
  rejected: 0,
  resolved: 1,
  pending: 2,
};

export async function getMenu(setFetchedMenu) {
  setFetchedMenu({
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

    setFetchedMenu({
      status: status.resolved,
      menu: menuArray,
    });
  } catch (error) {
    setFetchedMenu({
      status: status.rejected,
      menu: [],
    });
  }
}

export async function postOrder(items, userData, setPostStatus) {
  setPostStatus(status.pending);
  try {
    const order = {
      ...items,
      ...userData,
    };
    await axios.post(
      'https://meal-app-eee91-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      order,
    );
    setPostStatus(status.resolved);
    console.log(order);
  } catch (error) {
    setPostStatus(status.rejected);
    console.log(error);
  }
}
