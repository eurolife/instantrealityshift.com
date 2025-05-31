import React, { useState } from 'react';
import Modal from './Modal.jsx';

const ModalTriggerFreeDl = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fade-background px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer transition duration-300"
      >
        {title}
      </button>

      <Modal title={title} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">
          Get your FREE audio download!
        </h2>
        <p className="text-gray-700">
          Get a 10-minute sample of our 'Improve your Sleep' audio and audio
          guide! <br />
          <br />
          All you need to do is provide your email address and we will send you
          a link to your FREE life-changing audio download.
        </p>
        <div id="mc_embed_shell">
          <div id="mc_embed_signup">
            <form
              action="https://londonbowieevent.us18.list-manage.com/subscribe/post?u=7798546b97f9813b5817a7197&amp;id=3158bf98f4&amp;f_id=003aafe6f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_self"
              validate
            >
              <div id="mc_embed_signup_scroll">
                <p className="my-4">
                  <strong>Enter your email below:</strong>
                </p>

                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL"></label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email w-full py-3 px-4 bg-white placeholder:text-gray-500 text-gray-700 border border-border focus:outline-none transition-colors duration-300 rounded-lg"
                    id="mce-EMAIL"
                    required=""
                    defaultValue=""
                  />
                </div>
                <div
                  id="mergeRow-gdpr"
                  className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div className="content__gdpr">
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label className="checkbox subfield" htmlFor="gdpr105416">
                        <input
                          type="hidden"
                          id="gdpr_105416"
                          name="gdpr[105416]"
                          className="gdpr"
                          value="Y"
                        />
                      </label>
                    </fieldset>
                  </div>
                </div>
                <input type="hidden" name="tags" value="3053737" />
                <div id="mce-responses" className="clear">
                  <div
                    className="response hidden"
                    id="mce-error-response"
                  ></div>
                  <div
                    className="response hidden"
                    id="mce-success-response"
                  ></div>
                </div>
                <div aria-hidden="true" className="absolute left-[-5000px]">
                  <input
                    type="text"
                    name="b_7798546b97f9813b5817a7197_3158bf98f4"
                    tabIndex="-1"
                    defaultValue=""
                  />
                </div>
                <div className="clear mt-4">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button btn bg-tertiary rounded-lg !py-2 text-white hover:bg-gray-800 transition duration-300"
                    value="Get Your Download"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalTriggerFreeDl;
