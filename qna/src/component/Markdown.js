import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

import ReactMarkdown from "react-markdown";

const Markdown = ({ comment }) => {
  return (
    <div>
      <ReactMarkdown
        children={comment.content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {comment.content}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Markdown;
