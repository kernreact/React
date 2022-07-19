// Components
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import AccountManagement from './components/AccountManagement';
import Invoicing from './components/Invoicing';
import Support from './components/Support';
import Dashboard from './components/Dashboard';
import Products from './components/Products';

const routes = [
    {
        name: "Dashboard",
        url: "/dashboard",
        component: <Dashboard />
    },
    {
        name: "Users",
        url: "/users",
        exact: true,
        component: <Users />,
        subnav: [
            {
                name: "Create a user",
                url: "/create",                
                component: <CreateUser />
            },
            {
                name: "Invoicing",
                url: "/invoicing",
                component: <Invoicing />
            },
            {
                name: "Account management",
                url: "/account-management",
                component: <AccountManagement />
            }
        ]
    },
    {
        name: "Product management",
        url: "/products",
        component: <Products />
    },
    {
        name: "Support",
        url: "/support", 
        component: <Support />
    }
];

export default routes;
