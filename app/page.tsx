import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Page() {
  const filesDir = path.join(process.cwd(), "public/files");
  const files = fs.readdirSync(filesDir);

  return (
    <div className="p-10 max-sm:p-5">
      <p className="pb-20 max-w-lg">
        The materials contained and made available on this website (hereinafter
        referred to as the “Files”) are provided strictly on an “as-is” and
        “as-available” basis, solely for limited personal reference and viewing.
        The proprietor of this website (hereinafter referred to as the “Owner”)
        neither authorizes nor condones the copying, reproduction,
        redistribution, dissemination, republication, modification,
        transmission, or any other unauthorized use of the Files in any manner
        or by any means, whether digital, physical, or otherwise. Any such
        unauthorized act shall constitute a violation of the Owner’s
        intellectual property and proprietary rights, and may expose the
        offending party to civil and/or criminal liability under all applicable
        laws and statutes. The Owner expressly reserves all rights in respect of
        the Files, and any infringement, attempted use, or misappropriation
        shall be pursued to the fullest extent permitted by law.
      </p>
      <p className="pb-20 max-w-lg">
        The Owner further disclaims, rejects, and expressly warns that the Files
        are not, and shall not be construed as, reliable, accurate,
        comprehensive, or suitable for any serious academic, professional, or
        scholarly purpose. To the contrary, the Owner affirms without limitation
        that the Files are fundamentally deficient, poorly prepared, incomplete,
        and manifestly inadequate for any meaningful study or examination
        preparation. The Files may contain errors, misleading information,
        omissions, or material of dubious quality, and any reliance upon them is
        undertaken at the user’s sole risk. The Owner makes no representations,
        warranties, or guarantees, whether express or implied, regarding the
        efficacy, accuracy, completeness, or usefulness of the Files, and
        explicitly disclaims any assurance that their use will result in
        satisfactory academic performance, examination success, or otherwise
        favorable outcomes.
      </p>
      <p className="pb-20 max-w-lg">
        Users are hereby emphatically cautioned that any engagement with the
        Files may be counterproductive and potentially detrimental to their
        academic progress. The Owner cannot, and does not, assume any
        responsibility or liability for any consequences arising from the use,
        reliance upon, or attempted application of the Files, including but not
        limited to poor examination results, academic penalties, or misinformed
        conclusions. Any individual choosing to access, view, download, or
        otherwise utilize the Files does so with full acknowledgment of their
        inadequacy, inefficacy, and the substantial risk of frustration, error,
        or failure. By proceeding to access or utilize the Files, the user
        irrevocably agrees to assume full and exclusive responsibility for any
        and all outcomes, and to release, indemnify, and hold harmless the Owner
        from any and all claims, liabilities, damages, or losses arising
        directly or indirectly from such use.
      </p>
      <p className="pb-20 max-w-lg">
        In summation, the Files are neither recommended nor endorsed, and the
        Owner disclaims any implication to the contrary. They are, in the
        Owner’s unequivocal assessment, of substandard quality, fundamentally
        unhelpful, and unsuitable for serious study or examination preparation.
        Any reliance on the Files constitutes a deliberate choice to engage with
        material that is, by the Owner’s own admission, inadequate, poorly
        constructed, and likely to be counterproductive. The Owner expressly
        cautions against any expectation that the Files will provide meaningful
        academic advantage, and asserts that their use is undertaken entirely at
        the user’s peril, with full recognition of the Files’ demonstrable
        shortcomings and inherent unreliability.
      </p>
      <p className="pb-20 max-w-lg">
        The Files on this website are of poor quality, unreliable, and
        unsuitable for serious academic use. Copying or distributing them is
        strictly prohibited, and relying on them will not guarantee good exam
        results. Users access and use the Files entirely at their own risk.
      </p>
      <div className="flex flex-col gap-0 leading-5">
        {files.map((file) => {
          const md = file.endsWith(".mdx");
          const href = md
            ? `/files/${file.replace(/\.mdx$/, "")}`
            : `/files/${file}`;
          return (
            <Link
              href={href}
              key={file}
              className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white font-medium"
            >
              {file}
            </Link>
          );
        })}{" "}
      </div>
    </div>
  );
}
