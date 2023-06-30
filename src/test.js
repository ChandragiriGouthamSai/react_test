// import React from 'react'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
//
// const Test = (props) => {
//   return (
//
//     <Editor
//         editorState={editorState}
//         toolbarClassName="toolbarClassName"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName"
//         onEditorStateChange={this.onEditorStateChange}
//     />
//   )
// }
//
// export default Test;
import React, {Component} from 'react';
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import Textarea from '@mui/joy/Textarea';


class Test extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
        <div>
          <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
          />
          <Textarea
              placeholder="Type in here…"
              defaultValue="Try to put text longer than 4 lines."
              minRows={2}
              maxRows={4}
          />
          {/*<textarea*/}
          {/*    disabled*/}
          {/*    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}*/}
          {/*/>*/}
        </div>
    );
  }
}
export  default Test;
