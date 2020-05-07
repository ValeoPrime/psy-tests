import React, { Component } from 'react'
import styles from './Layout.css'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/Drawer'
import { connect } from 'react-redux';

class Layout extends Component {

    state = {
        menu: false
    }

    ToogleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuClose = () => {
        this.setState({
            menu: false
        })
    }

    styles = {
        color: {
            "background-color": 'red'
        }
    }
    render() {
        return (
            <div className={styles.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuClose}
                    isAuthenticated={this.props.isAuthenticated}
                />
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

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout)