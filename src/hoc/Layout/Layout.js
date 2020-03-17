import React, {Component} from 'react'
import styles from './Layout.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'

class Layout extends Component {

    state = {
        menu: false
    }

    ToogleMenu = ()=> {
        console.log(this.state)
        this.setState({
            menu: !this.state.menu
        })
    }



     styles = {
        color: {
            "background-color": 'red'
        }
    }
    render(){
        return(
            <div className={styles.Layout}>

                <MenuToggle 
                    onToggle={this.ToogleMenu}
                    isOpen={this.state.menu}

                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout