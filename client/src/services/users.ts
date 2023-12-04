import { IUser, UserInfoUpdate, CollectionResponseData } from '../types/user';
const BASE_URL = import.meta.env.VITE_BASE_URL;

// with data
export const getUserInfo = async (username: string) => {
  try {
    const url = `${BASE_URL}/profile/${username}`;
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) console.error('ERROR');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserCollectionByType = async (
  username: string,
  type: string,
  signal?: AbortSignal
) => {
  try {
    const url = `${BASE_URL}/collection/${username}/${type}`;
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      signal,
    });

    const data = (await response.json()) as CollectionResponseData;
    const { collection } = data;

    return collection;
  } catch (error) {
    console.error('get user coll client service err-->', error);
    throw error;
  }
};

// plain info
export const getUserPlainInfo = async (username: string) => {
  try {
    const url = `${BASE_URL}/user/${username}`;
    console.log('URL:', url);

    // get the info of cookie user
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as IUser;
    return data;
  } catch (error) {
    console.error('get plain user info client err -->', error);
    throw error;
  }
};

export const updateUserInfo = async (
  username: string,
  updates: UserInfoUpdate
) => {
  try {
    const url = `${BASE_URL}/profile/${username}`;
    const headers = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers,
      body: JSON.stringify(updates),
    });

    const data = (await response.json()) as IUser;
    return data;
  } catch (error) {
    console.error('Error in updateUserInfo', error);
    throw error;
  }
};

export const followAndUnfollow = async (
  usernameToFollow: string,
  usernameFollowing: string
) => {
  try {
    const followData = {
      usernameToFollow: usernameToFollow,
      usernameFollowing: usernameFollowing,
    };
    const url = `${BASE_URL}/profile/follow`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(followData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in updateUserInfo', error);
    throw error;
  }
};

export const checkFollowing = async (
  usernameFollowing: string,
  usernameToFollow: string
) => {
  try {
    const url = `${BASE_URL}/profile/check-following/${usernameFollowing}/${usernameToFollow}`;

    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in updateUserInfo', error);
    throw error;
  }
};

export const handleRelationship = async (
  receiver: string,
  follower: string,
  type: string
) => {
  try {
    const url = `${BASE_URL}/user/${receiver}/${type}`;
    const headers = {
      'Content-Type': 'application/json',
    };

    const res = await fetch(url, {
      method: 'POST',
      headers,
      credentials: 'include',
      body: JSON.stringify({
        follower,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const url = `${BASE_URL}/logout`;

    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in updateUserInfo', error);
    throw error;
  }
};
