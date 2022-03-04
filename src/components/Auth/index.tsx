
import { useUser } from '@auth0/nextjs-auth0';


const AuthComponent = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;

	if (error) return <div>{error.message}</div>;

	if (user) {
		return (
		<div> 
			Welcome, {user.name}! <a href="/api/auth/logout">Logout</a>
		</div>
		);
	}

	return <a href="/api/auth/login"><p>Login</p></a>
};

export default AuthComponent;
