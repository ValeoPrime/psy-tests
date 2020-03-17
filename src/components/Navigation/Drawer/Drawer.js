import React, {Component} from 'react'
import styles from './Drawer.css'
import BackDrop from '../../UI/BackDrop/BackDrop'


class Drawer extends Component {
    
    
    render(){
        const cls = [styles.Drawer]
        
        if(!this.props.isOpen){
            cls.push(styles.close)
        } 
        
        

        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        <li><a>Ссылки</a></li>
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