
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class RichEditor extends Component {
  state = {
    editorState:  EditorState.createEmpty(),
  }

  componentDidMount = () => {
    if(this.props.state.about) {
        this.setState({ editorState: this.props.state.about })
    }
  } 

  onEditorStateChange = (editorState) => {
    this.props.setState({ target: { name: this.props.field , value: this.state.editorState } })
    this.setState({ editorState });
  };


  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
                options: ['inline', 'link', 'list', 'history'],
                inline: {
                    options: ['bold', 'italic'],
                },
                link: {
                    inDropdown: false,
                    showOpenOptionOnHover: false,
                    defaultTargetOption: '_self',
                    options: ['link']
                },
                list: {
                    inDropdown: false,
                    options: ['unordered', 'ordered'],
                },
            }}
        />
      </div>
    );
  }
}



export default RichEditor;