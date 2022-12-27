export default function Tags(props) {
    let tags = props.tags;
    console.log(tags);
    return (
      <div class="tags">
        {tags.map((tag) => (
          <div class="tag">{"#" + tag}</div>
        ))}
      </div>
    );
  }
  