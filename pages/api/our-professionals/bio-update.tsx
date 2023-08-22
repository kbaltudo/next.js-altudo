import { id } from "date-fns/locale";

export default async function handler(req: { method: string; body: { data: any; }; query: { authorId: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: any; data?: { error: { status: number; message: string; }; }; }): void; new(): any; }; }; json: (arg0: any) => void; id: any }) {
    const authorId = req.query.authorId;
    let fetcherUrl = `https://dev-drupal-headless-legal.pantheonsite.io/v1/page/${authorId}`;
    if (req.method === "PATCH") {
        const { data } = req.body;
        //console.log(JSON.stringify(data))

        if (null === data) {
            res.status(400).json({ error: "Data in request not found " });
        }
        try {
            const response = await fetch(fetcherUrl, {
                method: "PATCH",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    // Authorization: `Bearer ${process.env.AUTH_TOKEN}`
                },
                body: JSON.stringify(req.body)
            });
            const data = await response.json();
            //console.log(data)

            if (data) {
                res.json(data);
            } else {
                res.status(400).json({ error: data.error.message });
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({ error: (e instanceof Error) ? e.message : 'unknown error, pease try again' });
        }
    } else if (req.method === "GET") {
        try {
            const response = await fetch(fetcherUrl, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    // Authorization: `Bearer ${process.env.AUTH_TOKEN}`
                }
            });
            const data = await response.json();

            if (data) {
                res.json(data);
            } else {
                res.status(400).json({ error: data.error.message });
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({ error: (e instanceof Error) ? e.message : 'unknown error, pease try again' });
        }
    }
    else {
        res
            .status(400)
            .json({
                data: {
                    error: {
                        status: 400,
                        message: "method not allowed."
                    }
                },
            });
    }
}


// response
// {
//     data: {
//       title: 'Nora Gracia',
//       body: '<p>Nora Garcia is an Counsel in Dentons Muñoz’ Corporate practice in Nicaragua. She advises local and international clients in their day-to-day activities in Nicaragua, including commercial transactions and corporate governance matters.</p><p>Nora Garcia guides and gives legal counsel to companies from a wide range of industries, such as energy, technology, communications and real estate, during all stages of their operations, specializing in financing, mergers and acquisitions, incorporation of new entities, dissolutions, and different kinds of negotiations with government institutions in Nicaragua.</p><p>Her practice includes assistance in compliance programs and structuring local and international projects with local and foreign investment.</p>',
//       field_area_of_focus: { items: [Array], type: 'entity_reference' },
//       field_awards: [
//         "Asia Business Law Journal 2022: The A-List: Malaysia's Top 100 Lawyers 2022",
//         'Asialaw 2022: "Distinguished Practitioner", Corporate and M&A',
//         'Asialaw 2018 - 2019: Leading Lawyer in Corporate/M&A and Intellectual Property'
//       ],
//       field_bio_image: { type: 'image', image_url: '' },
//       field_designation: 'Counsel',
//       field_education: { items: [Array], type: 'entity_reference_revisions' },
//       field_email: 'nora.garcia@altudo.co',
//       field_experience: { items: [Array], type: 'entity_reference_revisions' },
//       field_facebooklink: 'nora-garcia',
//       field_interest: 'To apply my legal knowledge in an innovative environment where I can make an impact on society and \r\n' +
//         'To provide exceptional support for my clients by using high levels of problem solving, critical thinking and communication skills.',
//       field_linkedin: 'nora-garcia',
//       field_location: { items: [Object], type: 'entity_reference' },
//       field_mobile: '9625873752',
//       field_organization: 'Dentons',
//       field_skill: { items: [Array], type: 'entity_reference_revisions' },
//       field_slug: 'nora-garcia',
//       field_social_links: { items: [Array], type: 'entity_reference_revisions' },
//       field_tumblr: 'nora-garcia',
//       field_twiterlink: 'nora-garcia',
//       self: 'https://dev-drupal-headless-legal.pantheonsite.io/v1/page/7'
//     }
//   }