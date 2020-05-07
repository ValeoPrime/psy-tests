import React, {Component} from 'react'
import styles from './Drawer.css'
import {NavLink} from 'react-router-dom'
import BackDrop from '../../UI/BackDrop/BackDrop'


class Drawer extends Component {

    renderLinks(links){
        return links.map((link, index) => {
            return (
                <li key={index}
                >
                    <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={styles.active}
                    onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    
    
    render(){
        const cls = [styles.Drawer]
        
        if(!this.props.isOpen){
            cls.push(styles.close)
        } 
        
        let links = [{to: '/', label: 'Список тестов', exact: true},
        
        ]

        if(this.props.isAuthenticated){
            links.push({to: '/create-quize', label: 'Создать тест', exact: false})
            links.push({to: '/logout', label: 'Выйти', exact: false})
        } else {
            links.push({to: '/auth', label: 'Аутентификация', exact: false})
        }

        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                
                {this.props.isOpen 
                ? <BackDrop
                onClick={this.props.onClose}
                /> 
                : null}
            </React.Fragment>
            
        )
    }
}

export default Drawer