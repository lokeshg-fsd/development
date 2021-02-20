import React from 'react';
import TextField from '@material-ui/core/TextField';
import { UIComponent } from 'flexicious-react-datagrid';
class Text extends UIComponent {
    constructor(props) {
        super(props);
        this.state = {value : ''} ;
    }
    handleChange = (event) => {
        /* alert(this.grid.getCurrentEditCell().getRowInfo().getData()[this.column.dataField]);
        if (event.target.key === 'Enter') { */
            this.grid.getCurrentEditCell().getRowInfo().getData()[this.column.dataField] = event.target.value;
            this.grid.getBodyContainer().endEdit(this)
       // }
    }
    render() {
        this.children = [
            <div>
                <TextField
                    label="Edit"
                    size="small"
                    value = {this.grid.getCurrentEditCell().getRowInfo().getData()[this.column.dataField]}
                    onChange = {this.handleChange}
                />
            </div>
        ]
        return super.render()
    }
}

export default Text;