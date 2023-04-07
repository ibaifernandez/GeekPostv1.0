function UploadImageTooltip() {
    return (
      <OverlayTrigger placement="top" overlay={renderTooltip}>
        <span>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </span>
      </OverlayTrigger>
    );
  }