import React, {Component, PropTypes, Fragment} from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import BoldMark from './BoldMark';
import ItalicMark from './ItalicMark';

import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import FormatToolBar from './FormatToolBar';


const initalValue = Value.fromJSON({
  document: {
    nodes : [{
      object: 'block',
      type: 'paragraph',
      nodes: [
        {
          object: 'text',
          leaves: [
            {
              text: 'Test',
            },
          ],
        },
      ],
    },
    ],
  },
})

export default class TextEditor extends Component {
  state = {
    value: initalValue
  }

  onChange = ({ value }) => {
    this.setState({ value })
  };

  renderMark = props => {
    switch(props.mark.type) {
      case 'bold': 
        return <BoldMark {...props}/>
      case 'italic': 
        return <ItalicMark {...props}/>
    }
  }

  onMarkClick = (e, type) => {
    e.preventDefault();
    this.editor.change().toggleMark(type);
    // const change = e.change().toggleMark(type);

    // this.onChange(change);
  }

  render () {
    return (
      <Fragment>
        <FormatToolBar>
          <button 
            onPointerDown={(e) => this.onMarkClick(e, 'bold')}
            className="tooltip-icon-button"
          >
            <Icon icon={italic}/>
          </button>
          <button 
            onPointerDown={(e) => this.onMarkClick(e, 'bold')}
            className="tooltip-icon-button"
          >
            <Icon icon={bold}/>
          </button>
        </FormatToolBar>
      <Editor ref = {editor => this.editor = editor}
        value={this.state.value}
        onChange={this.onChange}
        renderMark={this.renderMark}
        />
      </Fragment>  
    );
  }
}