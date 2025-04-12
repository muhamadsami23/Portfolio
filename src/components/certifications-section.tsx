"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  link?: string
}

const certifications: Certification[] = [
  {
    id: "cs50p",
    title: "CS50P: Introduction to Programming with Python",
    issuer: "Harvard University",
    date: "2024",
    description:
      "Comprehensive introduction to Python programming, covering data structures, algorithms, and problem-solving techniques.",
    link: "https://certificates.cs50.io/a790dd75-1ad7-4a37-a13e-1df9d3322549.pdf?size=letter",
  },
  {
    id: "googless",
    title: "Google Soft Skills Program",
    issuer: "PAFLA (Pakistan Freelancer Association, Powered by Google",
    date: "2024",
    description:
      "Soft skills program, including Communication, Networking, Problem Solving and Management",
    link: "https://doc-0k-10-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/s58gmqda7sjcp7oaaf2vktlmbr3kkena/7pnhmqtnk0kf429udcii69d9gl1sql1u/1744482750000/3/105391982042498651369/APznzabtssSU0K3bFjBYlUzsEVJ_t70IneeOzClPwloOltrfigPtY_3hCnxsluyWev0CAMd7i1ts8vvARg6X0F1rhE292ZRhIRohui_jWMozQwhNzF7WOsxr9InaIgBAa6Q_eJa-t1e9XkXygOQLS1GQvE0XjRAR_kAnP1HZze0ogg6xaBRSOImaDw7icRqQ7IULrtdn4asV61ilT7J3PfWgBjNl6L3HiKb0HCZ7iriG1N2BGjdIWtVYHCiRxzcDzXrW9sVF4FiT__ApNtTdFrezx4P8-dKDMygloqr9mG64qlp002s46mKTc_FhlAT6zsooX_9POWrt05DYxf6aDO_jnokz8LnZkuBxtnwE7gKRDjBvVHz9PlV-liVWLs1e4lnaWFHe7PfC8MgUphYKkzAul7bIAHSZM0IYFX_XsH7OUnmwn17n_So2-tUNaeXp4Z41LE7Ss7v6xEl3X_UbJacJN10igOmbncXfLuyrj7wu36l8HbBNzxht_LXfVe2GqG5OI2uTR1wUGKFANF-NZt2K2KrlQJpgoDZIepoq4fM5EvMTXEjKQb-s_7C0nX53P5I0co1EZy7qJuNF7cFDKFKQJCG5pIVExV9dQtWSWbmsHel0taPP60mQq78cAhjyZ19snZzjQR9RPaOsdJAhTg4EHIrxpXY9KcOFsGnTqiKJsmf0UF4y1ErpbyzdLevt8BjJ3JKj47HRLkxuENsvukNL5b3vPGUrr9YZkBlMxuUEJ9fE5O49RS83kjtPHpSFLS-oNQPRAXuWL4OViTmMdj1-wrksYWiiSDnrFDsVFMHPeKtjQ2qUi1HEa-oSu1ddW7cfnrlVJ7UZKSeQVPF5Xim4iIViJC_S6yLiG2pZmaIK9tzVsQ1wDdiqlWcPCK5ho-ziIljBX14yY2RgZO-mIYrh3EAc1kWma8vDC6XZqA1w3ATjAXMIffny4T7TyYjWyCoqxdjS3BiL1dkMPovle8jOpzZuc0hb4Hy6RlpfddRKhuB4Lh75F09JTF3447mHlZLkfow_CNw44tS3P-usUWxFMAr1O1wVJHoFydC5llgkF_npQ0WX4nwjr_rGkqqFli2gfjP0r4W6Z-obaQWu01aPzQUxasuSIHgIk34GGOp2mYBy2t62n7xw_jFlF5dhxSXZiKCMq8AVWtGrP2fSz9-0-yJBRgvKXlAyh_s_6UQJcS0eZl4CNMuqYtSZdPydPvA-DTKduFFNMEko5NDPJwSu51NvPNnAIjHPnk_NCH2qfU5X9748gG-jFY-Jq6d88q2iSlpPdC5a0vYtDuumg7D9lAM6noSM4mMVxVQy95_c_coAYcKe0Yw36HeEQ3eu9oxDtX4h5Txdn2WX_UCQybZCe2FbWR1Mc_WlUgOCE74hlPp4y3T9pdHImbRMQIe3GstrOjQbteYlf91BeP_e4pNS7oXLeMYUdkZNB1pf785gqNtvjSLdnH_XxLhhrwYFEsTuRYHwxPieLTlvXU8DnmYJiMaVXDXD9ZlhBHu8itHeRtx4J6PlCYImKTAxMZefk8JTsJd9gc3kgncSFeKlBvoR9eCYDFUNFw51mw336ZLJ7M7Gy0PMr474zB6W18KDEVyOJLV3IPqSe7C2tJ2hzty3NI8SCIsNlMk-KKOuqR77CoXFW9EItzs-Odt1F4zA5AAg6_N-mFrvXkPAYFmVtwSdCzgZUMHk2BnPSu9KyO-ki2VVXYvDWYEO4HcmXqGcC2CdmJ3oRS35IVP4wjOqFZc9Zps9xHcRdpRUsYIBwHh489lDUau9UWY7bi3tA_iE8Ip6LRqeWxkBPM7koIAWmIiNlc-aaCJiMWfeBOqv0SmWLrnO8tArljTOXvAldDUmxlbh8PjhRVLYlAKFBo038q5uMuaEGqlCIYNUTKZYx77gWfboJNKN9DReghX2181T17avbheD8NOTA4UvMvCUt1s0hUG0Ze08DadjsD2vfbX8aYO-Dz5FsW-J5G4Qs5rnzKdUE159dxZNhm5l1Uw0Jdaae_7O-PzfooRpULCc8sPa53Ee97aqDhbx8cEuJ9VuyWUZjpKoRRmb?authuser=0&nonce=cuuaiqjct68ek&user=105391982042498651369&hash=o72e81s7t3499ne62hcobefncqkctncq",
  },
]

const achievements: Certification[] = [
  {
    id: "spacetech-hackathon",
    title: "Winner - SpaceTech Hackathon",
    issuer: "KASBIT (Khadim Ali Shah Bukhari Institute of Technology)",
    date: "Apr 2024",
    description: "Developed an Autonomous Rover Navigator.",
    link:"https://www.linkedin.com/posts/muhammad-sami-48734b22a_spacetech-hackathonwinners-fastnationaluniversity-activity-7182120503581556736-lCnz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlcFOcBvJ3EdCf_FwiRigkwax-eFZRTE08"
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-zinc-950 relative">
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-teal-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Certifications Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-teal-500/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                    <Award className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-200">{cert.title}</h3>
                  <span className="text-sm text-teal-400">{cert.date}</span>
                  <p className="text-sm text-gray-400 mb-3">{cert.description}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 text-sm"
                    >
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-400">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-teal-500/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border border-zinc-700">
                    <Award className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-200">{ach.title}</h3>
                  <span className="text-sm text-teal-400">{ach.date}</span>
                  <p className="text-sm text-gray-400 mb-3">{ach.description}</p>
                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1 text-sm"
                    >
                      View Details <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}