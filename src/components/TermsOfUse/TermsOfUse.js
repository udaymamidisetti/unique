import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Topbar from "../Topbar/Topbar";
import "./termsOfUse.css";
const TermsOfUse = () => {
  const [open, setOpen] = useState(false);
  const [content, setcontent] = useState(false);
  const [conduct, setconduct] = useState(false);
  const [site, setsite] = useState(false);
  const [limitation, setLimitation] = useState(false);
  const [confident, setconfident] = useState(false);
  const [general, setGeneral] = useState(false);

  const openDesc = () => {
    setOpen(!open);
  };
  const openContent = () => {
    setcontent(!content);
  };
  const openConduct = () => {
    setconduct(!conduct);
  };
  const openSite = () => {
    setsite(!site);
  };
  const openLimit = () => {
    setLimitation(!limitation);
  };
  const openConfident = () => {
    setconfident(!confident);
  };
  const openGeneral = () => {
    setGeneral(!general);
  };
  return (
    <div>
      <div className="FullbodyTermContainer">
        <Topbar />
        <Header />
        <div>
          <h1 className="ugcHeading">TERMS OF USE</h1>
          <div className="TermContainer">
            <div className="selectedOptionsinterms" onClick={openDesc}>
              <div className="siteSmallCon">
                <p>SITE AND APP USE GENERALLY</p>
                <ExpandMoreIcon />
              </div>
              {open ? (
                <p className="onClickDesc">
                  1.1. Your User License You are granted a limited,
                  nonexclusive, nontransferable license to access the Site, App
                  and its content in accordance with these Terms. If you are
                  under 18, you may use our Site only with the involvement of a
                  parent or guardian. Our Site is hosted in the INDIA and
                  contains information that is appropriate for access and use in
                  the INDIA operating under the MY STATUS Business Ownership
                  Plan (“Applicable Markets”). We make no representation that
                  any materials on the Site and App are appropriate or available
                  for use outside the Applicable Markets, and accessing them
                  from territories where their contents are illegal is
                  prohibited. Any references on the Site to specific products or
                  services are applicable only to those available in the
                  Applicable Markets, and any product claims and comparisons to
                  other products on the Site and App apply within the Applicable
                  Markets only. Those who access this Site and App from other
                  locations do so according to their own initiative and are
                  responsible for compliance with local laws, including laws
                  regarding the transmission of technical data exported from the
                  INDIA or the territory in which they reside. We reserve the
                  right to refuse service and/or access to the Site and App in
                  our sole discretion and without notice. You are solely
                  responsible for your use of the Site, App and you agree to
                  compensate, hold harmless, and defend us from any claims,
                  damages, losses, liabilities, costs, and expenses, including,
                  but not limited to, attorneys’ fees, resulting from your use
                  or misuse of the Site and App. Posting or transmitting any
                  unlawful, infringing, threatening, libelous, defamatory,
                  obscene, indecent, inflammatory, pornographic, or profane
                  material, or any material that could constitute or encourage
                  conduct that would be considered a criminal offense, give rise
                  to civil liability, or otherwise violate any law or the MY
                  STATUS Rules of Conduct, is strictly prohibited. 1.2.
                  Limitations on Your Use No material from our Site and App may
                  be copied, reproduced, republished, downloaded, posted,
                  displayed, transmitted, or distributed in any way, without MY
                  STATUS prior written permission. You may not, without MY
                  STATUS prior written permission, frame or mirror any material
                  contained on this Site and App on any other server or website
                  or mobile application. The unauthorized use of any such
                  material on any other website, app or computer environment is
                  expressly prohibited. All intellectual property, including any
                  trademarks, service marks, trade names, trade dress, and
                  copyrighted materials are proprietary to MY STATUS or its
                  licensors. 1.3. Privacy and Your Personal Information Your use
                  of our Site and App is also subject to the terms of MY
                  STATUS’s Privacy Policy. You acknowledge that you have read
                  and understand our Privacy Policy, and consent to the use of
                  any personal information you provide in accordance with the
                  terms of, and for the purpose set forth in, our Privacy
                  Policy. 1.4. Site Identifiers It is your responsibility to
                  safeguard the password you use to access the Site or App, and
                  to promptly advise MY STATUS if you ever suspect that your
                  password has been compromised. We strongly encourage you to
                  change your password regularly, and to not share your password
                  with anyone not authorized to act on your behalf to prevent
                  unauthorized access. Because your user identification (UID)
                  number and password are specific to you, you acknowledge sole
                  responsibility for any and all use of our Site and App
                  conducted with your user identification number and password.
                  1.5. Links to Other Websites This Site and the MY STATUS
                  powered websites to which this Site links may contain links to
                  other websites for your information and convenience, or to
                  provide additional shopping for various other goods and
                  services through our Merchant and Services Partners. These
                  third-party websites are responsible for, and undertake to
                  maintain, their own site terms of use. We suggest that you
                  carefully review the terms of use of each site you choose to
                  access from our Sites. 1.6. Intellectual Property Rights
                  1.6.1. Copyright. The Site and App design, text, content,
                  selection and arrangement of elements, organization, graphics,
                  compilation, magnetic translation, digital conversion, and
                  other matters related to the Site and App are protected under
                  applicable copyright laws, ALL RIGHTS RESERVED. MY STATUS
                  maintains ownership of the copyrights to and/or has the right
                  to use and post all content it posts to the Site, App and the
                  posting of any such elements on the Site and App does not
                  constitute a waiver of any right in such content. You do not
                  acquire ownership rights to any such elements viewed and/or
                  downloaded through the Site And App. Except as otherwise
                  provided herein, none of the content accessible on the Site
                  may be used, copied, reproduced, downloaded, posted,
                  displayed, transmitted, modified, or distributed in any form
                  or by any means, including, without limitation, electronic,
                  mechanical, photocopying, recording, or otherwise, without MY
                  STATUS’s prior written permission. 1.6.2. Trademark. The MY
                  STATUS word mark, the MY STATUS logo, and all MY STATUS
                  product names, company names, and all other trademarks and
                  logos, unless otherwise noted, are trademarks and/or trade
                  dress of MY STATUS in the INDIA, or its affiliates or other
                  companies under common ownership or control or their licensors
                  (the “Marks”). The use or misuse of any Marks or any other
                  materials contained on the Site and App, without the prior
                  written permission of their owner, is expressly prohibited.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="selectedOptionsinterms" onClick={openContent}>
              <div className="siteSmallCon">
                <p>CONTENT POSTED BY USERS</p>
                <ExpandMoreIcon />
              </div>
              {content ? (
                <p className="onClickDesc">
                  2.1. Content 2.1.1. All information, data, text, software,
                  music, sound, photographs, graphics, video, messages,
                  products, services, and other materials posted to the Site and
                  App by users, including you (“Content”), are the sole
                  responsibility of the person by whom the Content was posted.
                  This means that you, and not us, are solely responsible for
                  all Content that you upload, post, transmit, or otherwise make
                  available through or on the Site and App. You are also solely
                  responsible for all Content posted under your user account.
                  You represent and warrant that (i) you own or otherwise
                  control all of the rights in and to the Content that you post;
                  (ii) that the Content is accurate; (iii) use of the Content
                  you supply does not violate these Terms; (iv) the Content does
                  not infringe, violate, or interfere with any intellectual
                  property or other rights of any third party and does not
                  violate any applicable law or regulation; and (v) the Content
                  will not cause injury of any kind to any person or entity.
                  2.1.2. Should Content be deemed illegal, we will cooperate
                  with the proper authorities, including but not limited to
                  submitting all necessary information to them. 2.1.3. If we
                  determine, in our sole discretion, that any Content submitted
                  by you is offensive or inappropriate, we may remove it
                  immediately or ask you to retract or modify the Content in
                  question. If you fail to meet our request within the time
                  specified, we and/or our designees may, at our sole discretion
                  remove the Content from the Site and App. We have no
                  obligation, however, to restrict or monitor Content in any
                  way. 2.1.4. You may see or read things that you do not like or
                  agree with on our Site and App. You understand that by using
                  our Site and App, you may be exposed to Content that is
                  offensive, indecent, or objectionable. 2.1.5. Under no
                  circumstances will we be liable in any way for any Content,
                  including, but not limited to, any errors or omissions in any
                  Content, or for any loss or damage of any kind incurred as a
                  result of the use of any Content posted, transmitted, or
                  otherwise made available through the Site and App. 2.1.6. We
                  do not control the Content posted on or through the Site, App
                  and, therefore, we do not guarantee the accuracy, integrity,
                  or quality of such Content. You are solely responsible for any
                  use or reliance on the Content, including on its accuracy,
                  completeness, or usefulness. 2.1.7. You acknowledge that we
                  are under no obligation to pre-screen Content, but that we and
                  our designees shall have the right (but not the obligation) in
                  our sole discretion to refuse or remove any Content that is
                  available through our Site and App. Without limiting the
                  foregoing, we and our designees shall have the right to remove
                  any Content that violates these Terms or any other MY STATUS
                  applicable policy, including the MY STATUS Rules of Conduct,
                  or is otherwise objectionable, in our sole discretion. 2.1.8.
                  Any material, information, or idea you submit to us or the
                  Site or App by any means may be disseminated or used by us
                  without compensation or liability to you for any purpose
                  whatsoever, including, but not limited to, developing,
                  manufacturing, and marketing products. We have no obligation
                  to keep any submissions confidential, return any materials
                  that you submit to us, or compensate you for the use of any
                  such materials under any circumstances. You hereby irrevocably
                  waive any and all claims based on our use of any materials,
                  ideas, or information that you submit to us. 2.1.9. We reserve
                  the right to monitor some, all, or none of the areas of the
                  Site and App for adherence to these Terms. You acknowledge
                  that by providing you with the ability to post information on
                  the Site and App, we are acting as a passive conduit for
                  distribution and we are not undertaking any obligation or
                  liability relating to any postings or activities on the Site.
                  2.2. Content License. We do not claim ownership of the Content
                  you upload, place, or post through the Site and App. You are
                  responsible for protecting your rights in such Content and are
                  not entitled to our help in protecting such Content. By
                  uploading, placing, or posting Content through the Site and
                  App, you grant us a perpetual, irrevocable, worldwide,
                  royalty-free, non-exclusive, and fully sublicensable license,
                  under all intellectual property and other rights, including,
                  without limitation, privacy and publicity, to use, distribute,
                  reproduce, modify, adapt, translate, publicly perform,
                  publicly display, transmit, exploit, create derivative works
                  from the Content (in whole or in part), and incorporate such
                  Content into other works in any format or medium now known or
                  later developed, for any purpose associated with the Site and
                  App. You grant us and our sub-licensees the right to use the
                  name that you submit in connection with such Content, if we
                  choose. You hereby irrevocably waive any claims based on
                  “moral rights” and similar theories, if any. Please note,
                  however, that certain activities (e.g., contests) that involve
                  the submission of Content by you may have terms applicable to
                  your Content that differ from those stated above. In the event
                  such terms differ with these terms, such terms will govern and
                  have precedence over these terms with respect to your Content.
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="selectedOptionsinterms" onClick={openConduct}>
              <div className="siteSmallCon">
                <p>YOUR CONDUCT</p>
                <ExpandMoreIcon />
              </div>
              {conduct ? (
                <p className="onClickDesc">
                  3.1. Your Authorization to Use the Site and App. Your
                  authorization to use the Site, App and contribute to it
                  depends on your compliance with community standards and the
                  conduct guidelines set forth below. If you fail to conduct
                  yourself appropriately, we may revoke your privileges to use
                  all or a portion of the Site, App and/or take other
                  appropriate measures to enforce these Terms and community
                  standards and conduct guidelines. 3.2. Conduct
                  Guidelines/Community Standards. The following is a
                  non-inclusive list of behaviors that are not permitted on the
                  Site and App. During your use of the Site and App, you hereby
                  agree not to: 3.2.1. Upload, post, transmit, or otherwise make
                  available any Content that is unlawful, harmful, threatening,
                  abusive, harassing, tortious, defamatory, vulgar, obscene,
                  libelous, invasive of another’s privacy (up to, but not
                  excluding any address, email, phone number, or any other
                  contact information without the written consent of the owner
                  of such information), hateful, or racially, ethnically, or
                  otherwise objectionable; 3.2.2. Harm minors in any way; 3.2.3.
                  Impersonate any person or entity, including, but not limited
                  to, any of our members, company officials, directors,
                  shareholders, agents, representatives or users, or falsely
                  state or otherwise misrepresent your affiliation with a person
                  or entity; 3.2.4. Forge headers or otherwise manipulate
                  identifiers in order to disguise the origin of any Content
                  posted, transmitted, or otherwise made available through the
                  Site; 3.2.5. Upload, post, or otherwise transmit any Content
                  that you do not have a right to upload, post or otherwise
                  transmit under any law or under contractual or fiduciary
                  relationships (such as inside information, proprietary and
                  confidential information learned or disclosed as part of
                  employment relationships or under nondisclosure agreements);
                  3.2.6. Upload, post, or otherwise transmit any Content or
                  otherwise engage in any activity that infringes, violates, or
                  interferes with any patent, trademark, trade secret,
                  copyright, rights of privacy or publicity, or other
                  proprietary rights of any party; 3.2.7. Upload, post, or
                  otherwise transmit unsolicited commercial email or “spam.”
                  This includes unethical marketing, advertising, “chain
                  letters,” or any other practice that could in any way be
                  construed as “spam,” such as, but not limited to, (a) sending
                  mass email to recipients who have not requested email from you
                  or with a fake return address, (b) promoting a site with
                  inappropriate links, titles, descriptions, or (c) promoting
                  your site by posting multiple submissions in public forums
                  that are identical; 3.2.8. Upload, post, or otherwise transmit
                  any material that contains software viruses, Trojan horses,
                  malware or any other computer code, files or programs designed
                  to interrupt, destroy, or limit the functionality of any
                  computer software or hardware or telecommunications equipment,
                  or intercept messages sent from a computer or communications
                  device; 3.2.9. Interfere with or disrupt the Site, servers, or
                  networks connected to the Site, or disobey any requirements,
                  procedures, policies, or regulations of networks connected to
                  the Site and App; 3.2.10. Intentionally or unintentionally
                  violate any applicable local, state, national, or
                  international law, including, but not limited to, regulations
                  promulgated by the INDIAN Securities and Exchange Commission,
                  any rules of any national or other securities exchange,
                  including without limitation, the National Stock Exchange, the
                  Bombay Stock Exchange or any regulations having the force of
                  law; 3.2.11. “Stalk” or otherwise harass another; 3.2.12.
                  Promote or provide instructional information about illegal
                  activities, promote physical harm or injury against any group
                  or individual, or promote any act of cruelty to humans or
                  animals. This may include, without limitation, providing
                  instructions on how to assemble bombs, grenades, and other
                  weapons or incendiary devices; 3.2.13. Offer for sale or sell
                  any item, good, or service through the Site and App; 3.2.14.
                  Use the Site and App as a forwarding service to another
                  website; 3.2.15. Allow usage by others in such a way as to
                  violate these Terms or any other applicable MY STATUS policy;
                  3.2.16. Take any steps to interfere with or in any manner
                  compromise any of our security measures; 3.2.17. Use the Site
                  for fraudulent purposes; 3.2.18. Harvest or collect any
                  information about or regarding other Account holders,
                  including, without limitation, any personal data or
                  information; 3.2.19. Sell, lend, lease, trade, rent, barter,
                  sublicense, assign, transfer, or grant rights in any manner to
                  your Account, or password, including, without limitation, on
                  or through the use of any third-party website, App or service;
                  3.2.20. Copy the Site, App or any portion thereof; 3.2.21.
                  Remove any proprietary notices from the Site and App; 3.2.22.
                  Cause, permit, or authorize the modification, creation of
                  derivative works, or translation of the Site without our
                  express permission; 3.2.23. Sell, assign, rent, lease, act as
                  a service bureau, or grant rights in the Site and App
                  including, without limitation, through sublicense, to any
                  other person or entity; 3.2.24. Attempt to decompile, reverse
                  engineer, disassemble, modify, or hack the Site, App or to
                  defeat or overcome any encryption and/or digital rights
                  management technology implemented by us with respect to the
                  Site, App and/or data transmitted, processed, or stored by us
                  or the Site and App; 3.2.25. Use the Site and App in any
                  manner not permitted by this policy, or otherwise exceed the
                  scope of our services that you have signed up for (i.e., by
                  accessing and using the tools that you do not have a right to
                  use).
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="selectedOptionsinterms" onClick={openSite}>
              <div className="siteSmallCon">
                <p>SITE WARRANRY DESCLAIMER</p>
                <ExpandMoreIcon />
              </div>
              {site ? (
                <p className="onClickDesc">
                  OUR SITE AND ITS CONTENTS ARE PROVIDED “AS IS” AND “AS
                  AVAILABLE,” WITH NO WARRANTY OF ANY KIND. TO THE FULLEST
                  EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE EXPRESSLY DISCLAIM
                  ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT
                  LIMITATION THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NONINFRINGEMENT, AND THOSE ARISING BY
                  STATUTE OR OTHERWISE IN LAW OR FROM A COURSE OF DEALING OR
                  USAGE OF TRADE. WE MAKE NO REPRESENTATION OR WARRANTY
                  WHATSOEVER REGARDING THE COMPLETENESS, ACCURACY, CORRECTNESS,
                  INTEGRITY, RELIABILITY, CURRENCY, ADEQUACY, SUITABILITY,
                  FUNCTIONALITY, AVAILABILITY, OR OPERATION OF THIS SITE AND APP
                  OR THE CONTENT OR SERVICES PROVIDED ON, OR ACCESSIBLE FROM,
                  THIS SITE AND APP. WE DO NOT WARRANT THAT THE OPERATION OF
                  THIS SITE ANDD APP WILL BE UNINTERRUPTED OR ERROR-FREE, OR
                  THAT THIS SITE IS FREE FROM VIRUSES AND OTHER HARMFUL
                  COMPONENTS TO EQUIPMENT OR SOFTWARE.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="selectedOptionsinterms" onClick={openLimit}>
              <div className="siteSmallCon">
                <p>LIMITATION OF LIABILITY</p>
                <ExpandMoreIcon />
              </div>
              {limitation ? (
                <p className="onClickDesc">
                  IN NO EVENT WILL WE BE LIABLE, NOR DO WE ASSUME
                  RESPONSIBILITY, FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                  OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH
                  THE USE OR INABILITY TO USE THIS SITE AND APP (OR THE CONTENT
                  OR SERVICES PROVIDED ON, OR ACCESSIBLE FROM, THIS SITE AND
                  APP), OR OTHERWISE, EVEN IF WE ARE ADVISED OF THE POSSIBILITY
                  OF SUCH DAMAGES.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="selectedOptionsinterms" onClick={openConfident}>
              <div className="siteSmallCon">
                <p>CONFIDENTIALITY</p>
                <ExpandMoreIcon />
              </div>
              {confident ? (
                <p className="onClickDesc">
                  For MSBO’s with a business powered by MY STATUS, your user
                  license includes a revocable right to access and use certain
                  trade secret, confidential, and proprietary business
                  information, which includes, without limitation, Line of
                  Sponsorship (LOS) information, i.e., information compiled by
                  MY STATUS that discloses or relates to all or part of the
                  specific arrangement of sponsorship within the Independent
                  Business Ownership Plan, including, without limitation, MSBO
                  lists, sponsorship trees, and all MSBO contact and business
                  performance information generated therefrom (Proprietary
                  Information), which may be made available to you on the Site
                  and App. You acknowledge that MY STATUS is the exclusive owner
                  of all Proprietary Information and agree to maintain all
                  Proprietary Information in strictest confidence and to use it
                  only as authorized by MY STATUS. You agree not to compile,
                  organize access, create lists of, or otherwise use Proprietary
                  Information except as authorized by MY STATUS under the MY
                  STATUS Rules of Conduct and the regulations and procedures
                  outlined in the Business Reference Guide, as amended.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="selectedOptionsinterms" onClick={openGeneral}>
              <div className="siteSmallCon">
                <p>GENERAL TERMS</p>
                <ExpandMoreIcon />
              </div>
              {general ? (
                <p className="onClickDesc">
                  7.1. Errors and Corrections While we use reasonable efforts to
                  include accurate and current information on our Site and App,
                  we do not warrant or represent that the Site and App will be
                  error-free. Data entry errors or other technical problems may
                  sometimes result in inaccurate information being shown. We
                  reserve the right to correct any inaccuracies or typographical
                  errors on our Site and App, including pricing and availability
                  of products and services, and shall have no liability for such
                  errors. We may also make improvements and/or changes to the
                  Site’s and App’s features, functionality, or content at any
                  time. If you see any information or description you believe to
                  be incorrect, please contact us as described in the “Contact
                  Us” section, below, and we will verify it for you. 7.2.
                  Governing Law and Jurisdiction These Terms are governed by and
                  construed in accordance with the laws of the State of
                  Maharashtra, INDIA, without giving effect to conflict of law
                  principles. Any controversy or dispute arising out of your use
                  of our Site shall be submitted, and you irrevocably consent,
                  to the personal jurisdiction of any state or federal court
                  located in, or whose district includes, Mumbai, Maharashtra,
                  India. If any provision of these Terms is found to be
                  unlawful, void, or for any reason unenforceable, then that
                  provision shall be deemed removed and shall not affect the
                  validity and enforceability of any remaining provisions. 7.3.
                  Changes to These Terms We reserve the right, in our sole
                  discretion, to change these Terms at any time. Updated
                  versions of the Terms will be posted here on our Site, App and
                  are effective immediately. The date of the newest version is
                  posted below. Please check back frequently, especially before
                  you use our Site and App, to see if these Terms have changed.
                  Continued use of the Site after any changes to the Terms
                  constitutes your consent to such changes. 7.4. Contact Us If
                  you have any concerns about the Site, App or these Terms,
                  please send us an e-mail at the below e-mail: We will make
                  every reasonable effort to address your concerns and remedy
                  any problems you bring to our attention. Contact us (e-mail) :
                  support@mystatus.store 7.5. Notice and Procedure for Making
                  Claims of Intellectual Property Infringement MY STATUS
                  respects the intellectual property rights of others and
                  expects its users to do the same. MY STATUS may remove content
                  that in its sole discretion appears to infringe the rights of
                  others. If you believe that any content posted on the Site
                  infringes your intellectual property rights, please notify MY
                  STATUS’s Intellectual Property Agent pursuant to the following
                  instructions: Notifications of claimed infringement should be
                  sent to the following Designated Agent for this site and App:
                  My STATUS Legal Department Email: Legal_IP@mystatus.store (For
                  matters other than intellectual property rights infringement,
                  e-mail us on support@mystatus.store ) To be effective, the
                  notification must be a written communication to the above
                  Designated Agent that includes the following: 1. A physical or
                  electronic signature of the intellectual property rights owner
                  or one authorized to act upon their behalf; 2. Identification
                  of the right claimed to have been infringed, or, if multiple
                  rights at a single online site and App are covered by a single
                  notification, a list of the multiple rights that have been
                  infringed at that site and App; 3. Identification of the
                  material that is claimed to be infringing or to be the subject
                  of infringing activity and that is to be removed or access to
                  which is to be disabled, and information reasonably sufficient
                  to permit MY STATUS to locate and remove the material; 4.
                  Information enabling MY STATUS to contact the complaining
                  party, such as an address, telephone number, and, if
                  available, an electronic mail address at which the complaining
                  party may be contacted; 5. A statement that the complaining
                  party has a good-faith belief that use of the material in the
                  manner complained of is not authorized by the rights owner,
                  its agent, or the law; and 6. A statement that the information
                  in the notification is accurate, and under penalty of perjury,
                  that the complaining party is authorized to act on behalf of
                  the owner of the right that is allegedly infringed. Updated
                  and effective from 26th Jan 2023. Copyright ©2023 MY STATUS.
                  All rights reserved.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="termFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
