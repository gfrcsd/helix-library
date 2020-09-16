

class ampFilter extends React.Component {
    constructor() {
        super();
        this.handleClickAll = this.handleClickAll.bind(this);
        this.handleClickTech = this.handleClickTech.bind(this);
        this.handleClickPersonal = this.handleClickPersonal.bind(this);
        this.state = {
            isClickedAll: true,
            isClickedTech: false,
            isClickedPersonal: false
        };
    }
    
    handleClickAll(e) {
        this.setState({
            isClickedAll: true,
            isClickedTech: false,
            isClickedPersonal: false
        });
    }
    
    handleClickTech(e) {
        this.setState({
            isClickedAll: false,
            isClickedTech: true,
            isClickedPersonal: false
        });
    }
    
    handleClickPersonal(e) {
        this.setState({
            isClickedAll: false,
            isClickedTech: false,
            isClickedPersonal: true
        });
    }
    
    render() {
        return (
            <div className={styles.filtersButtonGroup}>
            <button
            onClick={this.handleClickAll}
            className={
                this.state.isClickedAll
                ? classNames(styles.filtersButton, styles.isChecked)
                : styles.filtersButton
            }
            >
            All
            </button>
            <button
            onClick={this.handleClickTech}
            className={
                this.state.isClickedTech
                ? classNames(styles.filtersButton, styles.isChecked)
                : styles.filtersButton
            }
            >
            Tech
            </button>
            <button
            onClick={this.handleClickPersonal}
            className={
                this.state.isClickedPersonal
                ? classNames(styles.filtersButton, styles.isChecked)
                : styles.filtersButton
            }
            >
            Personal
            </button>
            </div>
            );
        }
    }
}