import React from 'react';
import './ShareModal.css';

class ShareModal extends React.Component {

	baseUrl = () => {
		return encodeURI(window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split('/')[1]);
	}

	urlEncode = () => {
		let url = "";
		let len = this.props.value.length;
		this.props.value.forEach(function (colorPanel, x) {
			url += colorPanel.color.replace('#', '');
			if (x !== len - 1) {
				url += "/";
			}
		});
		return encodeURI(url);
	}

	copyUrl = () => {
        navigator.clipboard.writeText(document.getElementById('shareUrl').innerHTML);
	}


	render() {
		return (
			<div className="modal fade" id="shareModal" tabIndex="-1" role="dialog" aria-labelledby="shareModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="shareModalLabel">Share Swatch</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p id="shareUrl">{this.baseUrl() + this.urlEncode()}</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" onClick={this.copyUrl}>Copy URL</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ShareModal;
