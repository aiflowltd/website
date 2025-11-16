import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "AI Flow | Terms of Service";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 18, 2021</p>

          <Card className="bg-card border-border p-8 md:p-12 space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed">
                Please read these terms and conditions carefully before using Our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Interpretation and Definitions</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Interpretation</h3>
              <p className="text-muted-foreground leading-relaxed">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Definitions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For the purposes of these Terms of Service:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong className="text-foreground">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to AI FLOW SOFTWARE S.R.L., Cluj-Napoca, Romania, 400594.</li>
                <li><strong className="text-foreground">Service</strong> refers to the Website, aiflow.ltd and console.aiflow.ltd.</li>
                <li><strong className="text-foreground">Website</strong> refers to AI Flow, accessible from https://www.aiflow.ltd/</li>
                <li><strong className="text-foreground">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Acknowledgment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These are the Terms of Service governing the use of this Service and the agreement that operates between You and the Company. These Terms of Service set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms of Service. These Terms of Service apply to all visitors, users and others who access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Service is protected by copyright, trademark, and other laws of both Romania and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Links to Other Websites</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms of Service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                The laws of Romania, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Disputes Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Changes to These Terms of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, You can contact us:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                By email: <a href="mailto:contact@aiflow.ltd" className="text-primary hover:underline">contact@aiflow.ltd</a>
              </p>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;

