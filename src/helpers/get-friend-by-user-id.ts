import { fetchRedis } from './redis';

export const getFriendByUserId = async (userId: string) => {
  const friendIds = (await fetchRedis(
    'smembers',
    `user:${userId}:friend `
  )) as string[];

  const friends = await Promise.all(
    friendIds.map(async (friendId) => {
      const friend = (await fetchRedis('get', `user:${friendId}`)) as User;
      return friend;
    })
  );

  return friends;
};
