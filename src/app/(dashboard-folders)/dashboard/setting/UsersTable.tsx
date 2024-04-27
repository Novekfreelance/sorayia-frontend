import { UserDataProps, columns } from "./columns";
import { UsersDataTable } from "./data-table";


async function getUserData(): Promise<UserDataProps[]> {
  // Fetch data from your API here.
  return [
			{
				id: "728ed52f",
				UserDatas: {
					avatar: "/user1.webp",
					username: "Jhon Doe",
					email: "jhonedoe@gmail.com",
				},
				AccessLevel: "Owners",
				UserSince: "2024-01-07T00:27:24.379Z",
			},
			{
				id: "0oshhh22",
				UserDatas: {
					avatar: "/user2.webp",
					username: "Jean Pierre",
					email:"jean@gmail.com",
				},
				AccessLevel: "Invited",
				UserSince: "2023-10-05T00:27:24.379Z",
			},
			{
				id: "668ed52f",
				UserDatas: {
					avatar: "/user3.webp",
					username: "Elisabeth Hill",
					email:"elisabeth@gmail.com",
				},
				AccessLevel: "Invited",
				UserSince: "2023-12-05T00:27:24.379Z",
			},
			{
				id: "668ed52f",
				UserDatas: {
					avatar: "/user3.webp",
					username: "Grace h Hill",
					email:"grace@gmail.com",
				},
				AccessLevel: "Invited",
				UserSince: "2023-12-05T00:27:24.379Z",
			},
			{
				id: "668ed52f",
				UserDatas: {
					avatar: "/user1.webp",
					username: "Jean Marc",
					email:"jean@gmail.com",
				},
				AccessLevel: "Invited",
				UserSince: "2023-12-05T00:27:24.379Z",
			},
			{
				id: "668ed22f",
				UserDatas: {
					avatar: "/user3.webp",
					username: "Nawal Hissane",
					email:"nawal@gmail.com",
				},
				AccessLevel: "Invited",
				UserSince: "2024-01-05T00:27:24.379Z",
			},
  ];
}

const UsersTable = async () => {
	const data = await getUserData();
	return <UsersDataTable columns={columns} data={data} />;
}

export default UsersTable;