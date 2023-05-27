import { useLocation, useNavigate, useParams } from 'react-router-dom';


export const WithRouter = (Component) => {

    let ComponentwithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>
    }

    return ComponentwithRouterProp
}

//функция обёртка над хуком, которая стучится в url, берёт объект с данным пользователя и прокидывает дальше в классовый компонент
//делается чтобы не мешать классы и хуки