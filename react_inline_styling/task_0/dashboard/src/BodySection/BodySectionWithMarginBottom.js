import './BodySection.css';

function BodySectionWithMarginBottom(props) {
    return (
        <div className="bodySectionWithMargin">
        <BodySection>
        {props}
        </BodySection>
        </div>
    );
  }
  
  export default BodySectionWithMarginBottom;
