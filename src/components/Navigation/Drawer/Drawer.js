import React, {Component} from 'react'
import styles from './Drawer.css'

class Drawer extends Component {
    
    
    
    render(){
        return(
            <nav className={styles.Drawer}>
                <ul>
                    <li><a>Ссылки</a></li>
                    <li><a>Ссылки</a></li>
                    <li><a>Ссылки</a></li>
                </ul>
            </nav>
        )
    }
}

export default Drawer