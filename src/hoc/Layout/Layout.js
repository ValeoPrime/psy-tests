import React, {Component} from 'react'
import styles from './Layout.css'

class Layout extends Component {
     styles = {
        color: {
            "background-color": 'red'
        }
    }
    render(){
        return(
            <div className={styles.Layout}>
                
                {this.props.children}
            </div>
        )
    }
}

export default Layout