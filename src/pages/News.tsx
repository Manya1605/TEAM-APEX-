
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsDialog } from "@/components/NewsDialog";

const News = () => {
  const featuredNews = {
    title: "UN Women Launches New Global Initiative for Gender Equality",
    excerpt: "A groundbreaking multi-country program aims to accelerate progress on women's economic empowerment and political participation.",
    author: "Sarah Johnson",
    date: "May 15, 2023",
    readTime: "8 min",
    category: "Global Policy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgUUcjOEMDInjLWHcvslTFui_pHoD-6bx8g&s",
    fullContent: `
      <p>The United Nations Entity for Gender Equality and the Empowerment of Women (UN Women) has announced an ambitious new global initiative that aims to accelerate progress on gender equality across multiple dimensions.</p>
      
      <p>The program, titled "Catalyzing Equality: A Decade of Action," will operate in 25 countries across five continents, focusing on three key areas: women's economic empowerment, political participation, and ending gender-based violence.</p>
      
      <p>With funding of $500 million pledged over five years from a coalition of governments and private sector partners, this represents one of the largest coordinated investments in gender equality ever assembled.</p>
      
      <p>"This initiative comes at a critical moment," said the Executive Director of UN Women at the launch event. "The COVID-19 pandemic has erased decades of progress, with women bearing the brunt of economic hardship, increased caregiving responsibilities, and rising domestic violence."</p>
      
      <p>The program will implement tailored approaches for each participating country while sharing best practices and measurement frameworks globally. Key interventions include:</p>
      
      <ul>
        <li>Economic support packages specifically designed for women entrepreneurs and small business owners</li>
        <li>Training and mentorship programs to prepare women for political leadership</li>
        <li>Technology platforms to increase access to markets, education, and healthcare</li>
        <li>Policy reform initiatives to address structural barriers to equality</li>
      </ul>
      
      <p>Initial target countries include Bangladesh, Brazil, Colombia, Egypt, Ethiopia, India, Indonesia, Kenya, Mexico, Nigeria, Pakistan, Philippines, Rwanda, South Africa, and Vietnam, with more to be announced in the coming months.</p>
      
      <p>Civil society organizations will play a crucial implementation role, with local women's groups involved in program design and evaluation to ensure initiatives address community-specific needs and contexts.</p>
      
      <p>"What makes this initiative different is the comprehensive approach and unprecedented level of coordination," said Dr. Elena Patel, a gender equality researcher not affiliated with the program. "Previous efforts have often been fragmented or too narrowly focused."</p>
      
      <p>The initiative will be rigorously evaluated, with transparent reporting on outcomes and impacts. A digital dashboard will track progress across all participating countries, providing real-time data on key indicators.</p>
      
      <p>The launch coincides with the 25th anniversary of the Beijing Declaration and Platform for Action, which remains the most comprehensive global policy framework for women's rights.</p>
      
      <p>Business leaders have also pledged support, with several multinational corporations committing to implement gender-responsive procurement policies and increase women's representation in leadership positions.</p>
      
      <p>"This isn't just about women's rights—it's about creating more prosperous, peaceful, and sustainable societies for everyone," emphasized the UN Secretary-General, who attended the launch. "Gender equality is the foundation for achieving all the Sustainable Development Goals."</p>
      
      <p>The program officially begins operations next month, with the first annual progress report expected in June 2024.</p>
    `,
  };

  const recentNews = [
    {
      title: "Tech Companies Pledge $50M to Close Gender Gap in STEM",
      excerpt: "Leading technology firms announced a joint initiative to fund educational programs for women in science and technology fields.",
      author: "Michael Chen",
      date: "May 12, 2023",
      readTime: "6 min",
      category: "Technology",
      fullContent: `
        <p>A consortium of major technology companies including Google, Microsoft, Apple, and Amazon has announced a combined $50 million pledge to address the persistent gender gap in STEM fields (Science, Technology, Engineering, and Mathematics).</p>
        
        <p>The initiative, titled "Future Innovators Fund," will support educational programs, scholarships, and mentorship opportunities specifically designed to increase women's participation in technology sectors.</p>
        
        <p>"Despite years of diversity initiatives, women still make up only 27% of the STEM workforce," said Alicia Rivera, the newly appointed director of the fund. "We need to tackle this issue at multiple levels—from early education to workplace inclusion."</p>
        
        <p>Funds will be distributed over five years to established non-profit organizations with proven track records in advancing women in technology, as well as innovative pilot programs designed to test new approaches.</p>
        
        <p>Key focus areas include:</p>
        <ul>
          <li>K-12 computer science education programs focused on girls</li>
          <li>University scholarships for women pursuing STEM degrees</li>
          <li>Returnship programs for women reentering the tech workforce after career breaks</li>
          <li>Research initiatives to identify and address systemic barriers</li>
        </ul>
        
        <p>The companies have also committed to improving their own hiring and retention practices, with regular public reporting on gender diversity metrics across all levels of their organizations.</p>
        
        <p>"This isn't just philanthropy—it's a business imperative," said the CEO of one participating company. "Diverse teams build better products and drive more innovation. We're limiting our own potential by not fully utilizing women's talents in tech."</p>
        
        <p>Applications for the first round of funding will open next month, with initial grants expected to be announced by the end of the year.</p>
      `,
      image: "https://images.theconversation.com/files/653423/original/file-20250305-68-4xhexz.jpg?ixlib=rb-4.1.0&rect=36%2C48%2C8119%2C5380&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
    },
    {
      title: "New Study Reveals Progress in Boardroom Diversity",
      excerpt: "Research shows a 12% increase in women's representation on corporate boards globally, though challenges remain.",
      author: "Jessica Williams",
      date: "May 10, 2023",
      readTime: "5 min",
      category: "Business",
      fullContent: `
        <p>A comprehensive new study from the Global Corporate Governance Institute has found that women's representation on corporate boards has increased by 12% globally over the past five years, indicating measurable progress in gender diversity at the highest levels of business leadership.</p>
        
        <p>The report, which analyzed data from over 3,000 publicly traded companies across 40 countries, found that women now hold 29.8% of board seats overall, up from 17.6% in 2018. However, the study also highlighted significant regional variations and ongoing challenges.</p>
        
        <p>"While the overall trend is positive, progress remains uneven," said Dr. Marcus Wong, lead author of the study. "Countries with diversity quotas or other regulatory requirements show significantly faster improvement than those relying solely on voluntary measures."</p>
        
        <p>France, Norway, and Sweden lead the rankings, with women occupying more than 40% of board positions. In contrast, several major economies in Asia and the Middle East continue to show representation below 15%.</p>
        
        <p>The study identified several factors associated with higher board diversity:</p>
        <ul>
          <li>Regulatory requirements or quotas</li>
          <li>Investor pressure, particularly from large institutional investors</li>
          <li>Transparent nomination processes</li>
          <li>Industry sector (with technology and energy sectors lagging behind consumer goods and healthcare)</li>
        </ul>
        
        <p>Encouragingly, the report found that once companies reach approximately 30% women board members, they tend to maintain or increase that level, suggesting a potential tipping point for sustainable change.</p>
        
        <p>The study also examined the impact of board diversity on company performance, finding positive correlations with improved risk management, stronger environmental, social and governance (ESG) metrics, and more innovative business strategies.</p>
        
        <p>"This isn't just about numbers—it's about leveraging diverse perspectives to navigate increasingly complex business environments," noted Sarah Caldwell, a corporate governance expert not involved in the research.</p>
        
        <p>Despite the progress, significant barriers remain. Women of color remain particularly underrepresented, and the "pipeline problem" persists, with many companies citing difficulties finding qualified female candidates for specialized industry sectors.</p>
        
        <p>The report recommends several best practices for companies seeking to improve board diversity, including formalized search processes, expanded candidate criteria beyond CEO experience, and addressing potential bias in board cultures.</p>
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZksAhWJgmYO28B6nnnrk5V9EBPN5WyDxNXg&s",
    },
    {
      title: "Landmark Court Decision Strengthens Equal Pay Protections",
      excerpt: "Supreme Court ruling expands the interpretation of equal pay laws, making it easier for workers to challenge pay discrimination.",
      author: "Robert Taylor",
      date: "May 8, 2023",
      readTime: "7 min",
      category: "Legal",
      fullContent: `
        <p>In a landmark 6-3 decision, the Supreme Court has significantly strengthened protections against gender-based pay discrimination, ruling that employees can challenge pay disparities even when performing jobs that are not identical but require similar qualifications and responsibilities.</p>
        
        <p>The case, Martinez v. Pacific Northwest Industries, centered on a female operations manager who discovered she was earning 22% less than her male counterparts in different departments despite having similar qualifications, experience, and responsibilities.</p>
        
        <p>The ruling expands the interpretation of the "equal work" standard in the Equal Pay Act, which previously required plaintiffs to show they performed virtually identical work to higher-paid colleagues of the opposite gender.</p>
        
        <p>"This decision reflects the economic realities of modern workplaces, where job titles and specific duties may vary but the core skills, effort, and responsibilities are comparable," wrote Justice Elena Kagan in the majority opinion.</p>
        
        <p>Legal experts consider this one of the most significant employment discrimination rulings in decades, potentially affecting millions of workers across the country.</p>
        
        <p>"The Court has removed a major obstacle that prevented many valid pay discrimination claims from being heard," explained employment law professor Daniel Ortiz. "Employers can no longer defend pay gaps merely by pointing to minor differences in job descriptions."</p>
        
        <p>While the ruling maintains that employers can justify pay differences based on factors like seniority, merit, or business necessity, it places a higher burden on companies to prove these factors genuinely explain disparities.</p>
        
        <p>The U.S. Chamber of Commerce and other business groups had opposed the broader interpretation, arguing it would lead to excessive litigation and intrude on employer discretion in setting compensation.</p>
        
        <p>In dissent, Justice Samuel Alito warned that courts would struggle to determine which jobs are "substantially similar" without clear guidelines, potentially creating uncertainty for businesses.</p>
        
        <p>However, advocates for gender equity celebrated the decision as a crucial step toward closing the persistent wage gap, which currently shows women earning approximately 82 cents for every dollar earned by men.</p>
        
        <p>"This ruling acknowledges what we've known for decades—that pay discrimination often occurs through job segregation and the systematic undervaluing of work predominantly done by women," said Maria Gonzalez, director of the Equal Pay Coalition.</p>
        
        <p>The plaintiff, Sophia Martinez, expressed relief after her seven-year legal battle. "This was never just about my situation," she said in a statement. "It was about establishing a fair standard for all workers facing similar discrimination."</p>
        
        <p>Legal experts expect an increase in pay equity cases following the ruling, and recommend that employers conduct proactive pay equity analyses to identify and address potential disparities before they face litigation.</p>
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ngyrfpKqXQTzqbccupT2dv2PUUGTwcAWlg&s",
    },
    {
      title: "Global Gender Equality Index: Nordic Countries Lead Again",
      excerpt: "Annual rankings show Scandinavian nations continuing to top the list, with notable improvements from several developing economies.",
      author: "Amara Okafor",
      date: "May 5, 2023",
      readTime: "9 min",
      category: "Research",
      fullContent: `
        <p>The World Economic Forum has released its annual Global Gender Equality Index, with Nordic countries maintaining their dominant position at the top of the rankings for the 15th consecutive year.</p>
        
        <p>Iceland, Finland, Norway, and Sweden occupied the top four positions, respectively, with each scoring above 85% on the composite measure of economic participation, educational attainment, health outcomes, and political empowerment.</p>
        
        <p>"These countries continue to demonstrate that gender equality is not just a women's issue but a critical component of economic competitiveness and social development," said Dr. Helena Bergström, director of the index.</p>
        
        <p>While the overall global gender gap narrowed slightly from the previous year, the report estimates that at the current pace of change, it will take approximately 132 years to reach full parity worldwide—a sobering timeline, though marginally improved from last year's 135-year projection.</p>
        
        <p>The report did highlight several encouraging developments, particularly from developing economies showing accelerated progress:</p>
        
        <ul>
          <li>Rwanda ranked 6th globally, the highest position ever achieved by an African nation, driven by strong political representation and labor force participation</li>
          <li>The United Arab Emirates recorded the most significant year-over-year improvement, jumping 17 places due to reforms in women's legal rights and workplace policies</li>
          <li>Colombia became the first Latin American country to enter the top 20, following substantial improvements in women's political representation and educational attainment</li>
        </ul>
        
        <p>The United States ranked 27th, showing mixed results with high scores in educational attainment but continuing challenges in political representation and healthcare outcomes.</p>
        
        <p>For the first time, the index included comprehensive data on the care economy, highlighting the disproportionate unpaid care work performed by women globally and its impact on economic participation.</p>
        
        <p>"The pandemic has made it impossible to ignore how caregiving responsibilities affect women's economic opportunities," noted economist Dr. James Park. "Countries that have implemented family-friendly policies like affordable childcare and paid parental leave consistently score higher on overall gender equality."</p>
        
        <p>The report identified five key areas where progress has stalled or reversed globally:</p>
        
        <ul>
          <li>Women's labor force participation, which remains below pre-pandemic levels in many countries</li>
          <li>Digital gender divides, with women having less access to technology and fewer opportunities in high-growth tech sectors</li>
          <li>Political leadership, with the pace of improvement slowing after earlier gains</li>
          <li>Reproductive healthcare access, which has deteriorated in several regions</li>
          <li>Gender-based violence, which increased during pandemic lockdowns</li>
        </ul>
        
        <p>The report concludes with policy recommendations, emphasizing that targeted interventions in these areas could accelerate progress and highlighting successful initiatives that could be adapted across different cultural and economic contexts.</p>
      `,
      image: "https://www.hhs.se/contentassets/23c49576fc464fb980dd4ea33c717eb6/20240307-shutterstock_2206075213-image-01.jpg?width=782&mode=crop&format=jpg&quality=90",
    },
  ];

  const expertArticles = [
    {
      title: "Beyond Representation: Measuring Real Inclusion",
      excerpt: "Numerical diversity doesn't always equate to genuine inclusion. Here's how organizations can move beyond simple metrics.",
      author: "Dr. Eliza Martinez",
      role: "Diversity & Inclusion Researcher",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_BwX-P20fMtkDyineaAtXwKa9mm0siiGLA&s",
      fullContent: `
        <p>In recent years, many organizations have focused on increasing the numerical representation of women and other underrepresented groups. While this is a necessary first step, true inclusion requires going beyond these surface-level metrics.</p>
        
        <p>As a researcher studying organizational inclusion for over fifteen years, I've observed that many diversity initiatives fail to achieve their intended outcomes because they stop at representation without addressing the deeper cultural factors that determine whether people feel valued, respected, and empowered to contribute fully.</p>
        
        <p><strong>The Inclusion Gap</strong></p>
        
        <p>Consider this common scenario: A company proudly announces that 50% of its workforce is female, but a closer look reveals that women hold only 15% of leadership positions, rarely speak in meetings, and frequently leave the organization within two years. This company has achieved diversity in numbers but has failed at creating genuine inclusion.</p>
        
        <p>True inclusion exists when all members of an organization:</p>
        <ul>
          <li>Feel they belong and are valued for their unique perspectives</li>
          <li>Have equitable access to opportunities and resources</li>
          <li>Can influence decision-making processes</li>
          <li>Are able to advance based on merit rather than conformity to dominant norms</li>
          <li>Feel psychologically safe to express their authentic selves</li>
        </ul>
        
        <p><strong>Beyond the Numbers: Measuring Real Inclusion</strong></p>
        
        <p>Organizations committed to genuine inclusion should measure factors beyond demographic representation. Consider implementing regular assessments of:</p>
        
        <p><em>1. Psychological Safety</em><br>
        Do all employees feel safe speaking up, offering ideas, and admitting mistakes without fear of punishment or ridicule? Psychological safety is foundational to inclusion and can be measured through anonymous surveys and behavioral observations.</p>
        
        <p><em>2. Power Distribution</em><br>
        Who makes decisions? Who speaks in meetings? Who gets credit for ideas? Mapping informal power structures often reveals hidden barriers to inclusion that demographic data won't capture.</p>
        
        <p><em>3. Resource Allocation</em><br>
        Track who receives development opportunities, challenging assignments, mentorship, and sponsorship. These allocations often predict future leadership pipelines more accurately than current representation statistics.</p>
        
        <p><em>4. Belonging</em><br>
        Measure employees' sense of connection to the organization and their teams. Belonging correlates strongly with engagement, retention, and willingness to contribute discretionary effort.</p>
        
        <p><em>5. Retention and Advancement Patterns</em><br>
        Analyze whether different demographic groups advance at similar rates and stay with the organization for similar durations. Disparities here often indicate inclusion failures that representation figures mask.</p>
        
        <p><strong>Creating Genuine Inclusion</strong></p>
        
        <p>Building truly inclusive organizations requires a comprehensive approach that addresses both systems and behaviors:</p>
        
        <p><em>1. Examine Cultural Norms</em><br>
        Often, what's considered "professional" or "leadership material" reflects dominant group norms rather than objective criteria. Review promotion criteria, performance evaluations, and cultural expectations for hidden biases.</p>
        
        <p><em>2. Address Microaggressions</em><br>
        The small, daily indignities that marginalized groups face create cumulative harm that drives talented people away. Train all employees to recognize and interrupt subtle exclusionary behaviors.</p>
        
        <p><em>3. Redesign Work Systems</em><br>
        From meeting structures to collaboration tools to flexible work options, examine whether your operational systems accommodate diverse needs and working styles.</p>
        
        <p><em>4. Cultivate Inclusive Leadership</em><br>
        Leaders set the tone for inclusion. Invest in developing leaders at all levels who can model vulnerability, cultural humility, and skill in facilitating diverse perspectives.</p>
        
        <p><em>5. Connect Inclusion to Strategy</em><br>
        Frame inclusion as a business imperative rather than a compliance exercise. Organizations that view diversity as a source of competitive advantage integrate inclusive practices into their core operations.</p>
        
        <p><strong>Conclusion</strong></p>
        
        <p>As we work toward gender equality, let's ensure we're measuring what truly matters. Representation provides a useful snapshot, but inclusion determines whether diverse talent will thrive and contribute their full potential. By developing more sophisticated approaches to measuring and fostering inclusion, organizations can move beyond surface-level diversity to create environments where everyone can truly belong and excel.</p>
      `,
    },
    {
      title: "The Economic Case for Gender Equality",
      excerpt: "How closing gender gaps in the workforce could add trillions to global GDP and benefit economies worldwide.",
      author: "Professor James Wilson",
      role: "Economist",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2ige9HHwq8Cv62oyjp5hUMR7EK49OophgA&s",
      fullContent: `
        <p>While gender equality is fundamentally a human rights issue, it also represents one of the greatest economic opportunities of our time. Mounting evidence demonstrates that advancing women's economic participation could add trillions to global GDP and accelerate economic development across both developed and emerging economies.</p>
        
        <p><strong>The Trillion-Dollar Opportunity</strong></p>
        
        <p>According to research by McKinsey Global Institute, advancing women's equality could add $12 trillion to global GDP by 2025—equivalent to the combined economies of Japan, Germany, and the United Kingdom. With more ambitious progress, that figure could reach $28 trillion, representing a 26% increase in global GDP compared to a business-as-usual scenario.</p>
        
        <p>These projections aren't just theoretical. Countries and companies that have made greater progress toward gender equality consistently demonstrate stronger economic performance:</p>
        
        <ul>
          <li>Nations with higher female labor force participation generally have higher GDP per capita</li>
          <li>Companies with gender-diverse leadership are 25% more likely to achieve above-average profitability</li>
          <li>Economies with smaller gender gaps in entrepreneurship show higher rates of innovation and job creation</li>
        </ul>
        
        <p><strong>Key Economic Benefits</strong></p>
        
        <p><em>1. Expanded Labor Supply and Productivity</em></p>
        <p>Women represent the world's largest underutilized talent pool. Removing barriers to their participation addresses labor shortages, expands the taxpayer base, and brings valuable skills into the workforce. In rapidly aging economies like Japan, Italy, and South Korea, increasing women's labor force participation offers a critical countermeasure to demographic challenges.</p>
        
        <p>Moreover, closing gender gaps in work hours and productivity could increase global output by more than 40% in many countries. Tackling sectoral segregation alone—enabling women to work in higher-productivity industries and roles—would generate substantial economic gains.</p>
        
        <p><em>2. Consumer Market Growth</em></p>
        <p>As women earn more income, their consumer spending increases proportionally. Women already control roughly $20 trillion in annual consumer spending globally, and this figure is projected to rise as their economic participation grows. Industries ranging from financial services to healthcare to consumer goods can expect expanding markets as women's purchasing power increases.</p>
        
        <p><em>3. Human Capital Development</em></p>
        <p>When women have greater economic opportunity and control over resources, they typically invest more in children's education, nutrition, and healthcare. This creates a virtuous cycle, enhancing human capital development across generations and improving long-term economic productivity.</p>
        
        <p>Research from developing economies shows that women typically reinvest up to 90% of their income in their families, compared to 30-40% for men. This multiplier effect substantially increases the economic returns on investments in women's economic empowerment.</p>
        
        <p><em>4. Reduced Poverty and Inequality</em></p>
        <p>Gender equality measures have proven particularly effective at reducing poverty rates and income inequality. In Latin America, women's increased labor force participation contributed to a 30% reduction in extreme poverty between 2000 and 2010. Similarly, narrowing gender gaps helps counteract the growing income inequality that threatens economic and social stability in many countries.</p>
        
        <p><em>5. Business Performance and Innovation</em></p>
        <p>Companies with diverse leadership consistently outperform their less diverse counterparts. This isn't merely correlation—diversity drives better decision-making, enhanced innovation, and improved risk management. Teams with gender diversity are more likely to challenge assumptions, consider alternative perspectives, and develop products that serve diverse customer bases.</p>
        
        <p><strong>Economic Policy Implications</strong></p>
        
        <p>Realizing these economic benefits requires targeted policy interventions and business practices:</p>
        
        <ul>
          <li><strong>Childcare infrastructure:</strong> Accessible, affordable childcare represents one of the highest-return investments for increasing women's labor force participation</li>
          <li><strong>Paid family leave:</strong> Evidence shows that well-designed parental leave policies increase women's attachment to the workforce while benefiting children's development</li>
          <li><strong>Tax policy reform:</strong> Removing tax disincentives for secondary earners (often women) can significantly boost female labor supply</li>
          <li><strong>Equal pay legislation:</strong> Transparent reporting requirements and enforcement mechanisms help close persistent wage gaps</li>
          <li><strong>Financial inclusion:</strong> Expanding women's access to banking, credit, and capital enables entrepreneurship and asset accumulation</li>
        </ul>
        
        <p>Importantly, these measures typically generate positive returns on investment. For example, analyses of childcare programs show that increased tax revenues from higher maternal employment often exceed program costs within a few years.</p>
        
        <p><strong>Conclusion</strong></p>
        
        <p>The economic case for gender equality is compelling and well-documented. Far from representing a trade-off between equity and efficiency, gender equality measures offer a rare opportunity to simultaneously advance social justice and economic prosperity. As we rebuild economies in the wake of global disruptions, investments in women's economic empowerment offer a proven strategy for creating more resilient, innovative, and prosperous societies.</p>
      `,
    },
    {
      title: "Digital Gender Divide: A New Frontier for Equality",
      excerpt: "As technology reshapes society, ensuring equal digital access and skills development is crucial for gender equality.",
      author: "Sophia Nguyen",
      role: "Technology Policy Advisor",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_p5Nt0-A9NCIk-DsxgttEhDte5BjY1LfwPQ&s",
      fullContent: `
        <p>As technology rapidly transforms how we work, learn, and engage with society, a new dimension of inequality has emerged: the digital gender divide. Women and girls worldwide face persistent gaps in digital access, skills, leadership opportunities, and protection from online harms—creating barriers that could exacerbate existing gender inequalities for generations to come.</p>
        
        <p>This divide is not merely about who owns smartphones or has internet connections. It encompasses the complex interplay of technical infrastructure, social norms, educational opportunities, and power dynamics that determine who benefits from digital transformation and who gets left behind.</p>
        
        <p><strong>The Current Landscape</strong></p>
        
        <p>The statistics paint a concerning picture:</p>
        
        <ul>
          <li>Women are 7% less likely than men to own mobile phones globally, with the gap widening to 15% in low- and middle-income countries</li>
          <li>259 million fewer women have access to the internet compared to men</li>
          <li>Women represent only 22% of artificial intelligence professionals worldwide</li>
          <li>Female-founded tech startups receive just 2.3% of venture capital funding</li>
          <li>Women are 27 times more likely than men to face harassment online</li>
        </ul>
        
        <p>These disparities represent more than abstract inequality—they translate into concrete disadvantages in economic opportunity, political voice, personal safety, and access to essential services increasingly delivered through digital channels.</p>
        
        <p><strong>Key Dimensions of the Digital Gender Divide</strong></p>
        
        <p><em>1. Access and Affordability</em></p>
        <p>The most basic dimension involves physical access to devices and connectivity. Women are less likely to own devices, have regular internet access, or be able to afford data plans. This "first-level" divide remains significant in many regions, with women in rural South Asia, the Middle East, and sub-Saharan Africa facing particularly large gaps.</p>
        
        <p>Contributing factors include:</p>
        <ul>
          <li>Income disparities that make technology purchases more challenging for women</li>
          <li>Social norms that prioritize male access to household technology</li>
          <li>Safety and harassment concerns that discourage women's technology use in public spaces</li>
          <li>Lack of gender-responsive design in digital infrastructure deployment</li>
        </ul>
        
        <p><em>2. Skills and Education</em></p>
        <p>Beyond basic access, women often have fewer opportunities to develop digital literacy and advanced technical skills. This "second-level" divide affects women's ability to use technology productively and participate in the growing digital economy.</p>
        
        <p>The skills gap manifests across the spectrum from basic digital literacy to advanced technical expertise:</p>
        <ul>
          <li>Women are 25% less likely than men to know how to leverage digital technology for basic purposes</li>
          <li>Girls are consistently underrepresented in STEM education, particularly in computer science and engineering</li>
          <li>Women comprise only 28% of STEM graduates globally</li>
          <li>Female professionals are underrepresented in technical roles and overrepresented in lower-paying "soft" digital functions</li>
        </ul>
        
        <p><em>3. Leadership and Influence</em></p>
        <p>Perhaps most consequentially, women remain dramatically underrepresented in positions that shape the digital future:</p>
        <ul>
          <li>Less than 25% of tech company leadership roles are held by women</li>
          <li>Female representation in AI research is below 20%</li>
          <li>Women account for only 13% of patent applications in digital technologies</li>
          <li>Most standards-setting bodies for digital technologies have severe gender imbalances</li>
        </ul>
        
        <p>This leadership gap means that technologies are often designed without women's perspectives, needs, and experiences in mind—creating products and platforms that may inadvertently perpetuate biases or fail to serve women effectively.</p>
        
        <p><em>4. Safety and Security</em></p>
        <p>The digital realm reflects and sometimes amplifies gender-based harassment and violence from the physical world:</p>
        <ul>
          <li>58% of women have experienced online harassment or abuse</li>
          <li>Online gender-based violence includes stalking, non-consensual image sharing, doxing, and coordinated harassment campaigns</li>
          <li>Women in public-facing roles (journalists, politicians, activists) face particularly severe digital threats</li>
          <li>Fear of harassment drives many women to self-censor, withdraw from online spaces, or adopt restrictive privacy practices</li>
        </ul>
        
        <p><strong>Closing the Digital Gender Divide</strong></p>
        
        <p>Addressing these interlocking challenges requires coordinated action across multiple fronts:</p>
        
        <p><em>1. Gender-Responsive Infrastructure</em></p>
        <p>Digital infrastructure deployment should explicitly prioritize women's access and use:</p>
        <ul>
          <li>Universal service funds can target women's connectivity</li>
          <li>Public access points can be designed with women's safety and convenience in mind</li>
          <li>Device and data subsidies can specifically address affordability barriers women face</li>
          <li>Community networks and mesh technologies can extend connectivity to underserved areas</li>
        </ul>
        
        <p><em>2. Skills Development Ecosystem</em></p>
        <p>Building women's digital capabilities requires interventions at multiple education levels:</p>
        <ul>
          <li>Early education programs can counter stereotypes and encourage girls' interest in technology</li>
          <li>Scholarships, mentorship, and peer networks can support women in STEM fields</li>
          <li>Non-formal learning opportunities can provide flexible skills development for women with various responsibilities</li>
          <li>Reskilling programs can help women transition to digital economy roles</li>
        </ul>
        
        <p><em>3. Inclusive Innovation Systems</em></p>
        <p>Enhancing women's leadership in technology development involves both removing barriers and creating enabling environments:</p>
        <ul>
          <li>Venture funding mechanisms can counter biases that limit investment in women founders</li>
          <li>Procurement policies can support women-owned technology businesses</li>
          <li>Corporate diversity targets and transparent reporting can drive organizational change</li>
          <li>Research funding can prioritize technologies addressing women's needs</li>
        </ul>
        
        <p><em>4. Safety By Design</em></p>
        <p>Digital platforms and products should integrate safety considerations from inception:</p>
        <ul>
          <li>Privacy features should account for women's specific safety concerns</li>
          <li>Reporting mechanisms should effectively address gender-based harassment</li>
          <li>Content moderation systems should recognize and respond to misogynistic abuse</li>
          <li>User research should incorporate diverse women's experiences and concerns</li>
        </ul>
        
        <p><strong>Conclusion</strong></p>
        
        <p>As digital technologies become increasingly central to economic opportunity, civic participation, and social connection, addressing the digital gender divide has become an urgent priority for achieving broader gender equality goals. Without concerted action, existing gender gaps risk being not just replicated but amplified in the digital age.</p>
        
        <p>The good news is that growing awareness of these issues has sparked promising initiatives worldwide—from community networks bringing connectivity to rural women to coding programs for girls to policy frameworks promoting digital inclusion. By combining targeted interventions with systemic change, we can ensure that the digital revolution advances rather than hinders gender equality.</p>
      `,
    },
  ];

  const pollQuestions = [
    {
      question: "What do you believe is the most effective approach to achieving gender equality?",
      options: [
        "Policy and legislative changes",
        "Corporate leadership initiatives",
        "Education and awareness campaigns",
        "Grassroots community organizing",
      ],
    },
    {
      question: "In your experience, which area shows the most persistent gender gap?",
      options: [
        "Pay and compensation",
        "Leadership opportunities",
        "Work-life balance policies",
        "Recognition and visibility",
      ],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary">
        News & Insights
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-12 max-w-3xl">
        Stay informed with the latest developments, research, and perspectives on gender equality
        from around the world. Explore expert analysis and join the conversation.
      </p>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8 sr-only">Featured Story</h2>
        <Card className="overflow-hidden animate-fade-up">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                    {featuredNews.category}
                  </span>
                  <span className="text-xs text-gray-500">Featured</span>
                </div>
                <CardTitle className="text-2xl md:text-3xl">{featuredNews.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {featuredNews.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {featuredNews.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {featuredNews.readTime} read
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{featuredNews.excerpt}</p>
              </CardContent>
              <CardFooter>
                <NewsDialog
                  title={featuredNews.title}
                  excerpt={featuredNews.excerpt}
                  fullContent={featuredNews.fullContent}
                  author={featuredNews.author}
                  date={featuredNews.date}
                  readTime={featuredNews.readTime}
                  trigger={
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2">
                      Read Full Story <ArrowRight size={16} />
                    </button>
                  }
                />
              </CardFooter>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentNews.map((news, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-purple-100 text-primary-dark px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {news.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {news.readTime} read
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{news.excerpt}</p>
              </CardContent>
              <CardFooter>
                <NewsDialog
                  title={news.title}
                  excerpt={news.excerpt}
                  fullContent={news.fullContent}
                  author={news.author}
                  date={news.date}
                  readTime={news.readTime}
                  trigger={
                    <button className="text-primary hover:underline flex items-center gap-1">
                      Continue Reading <ArrowRight size={16} />
                    </button>
                  }
                />
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
            View All News
          </button>
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Expert Perspectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertArticles.map((article, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={article.avatar} 
                    alt={article.author} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{article.author}</p>
                    <p className="text-xs text-gray-500">{article.role}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <NewsDialog
                  title={article.title}
                  excerpt={article.excerpt}
                  fullContent={article.fullContent}
                  author={article.author}
                  date="May 2023"
                  readTime="10 min"
                  trigger={
                    <button className="text-primary hover:underline flex items-center gap-1">
                      Read Analysis <ArrowRight size={16} />
                    </button>
                  }
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      <section className="mb-16">
        <h2 className="font-playfair text-3xl font-semibold mb-8">Opinion Polls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pollQuestions.map((poll, index) => (
            <Card key={index} className="animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader>
                <CardTitle className="text-xl">{poll.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {poll.options.map((option, optIndex) => (
                    <div key={optIndex} className="flex items-center gap-2">
                      <input type="radio" id={`poll-${index}-opt-${optIndex}`} name={`poll-${index}`} className="w-4 h-4 text-primary" />
                      <label htmlFor={`poll-${index}-opt-${optIndex}`} className="text-gray-700">{option}</label>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full">
                  Submit Vote
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <div className="bg-gold-light p-8 rounded-lg animate-fade-up">
        <h2 className="font-playfair text-2xl font-bold mb-4 text-gold-dark">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-gold-dark">Receive weekly updates on gender equality news, events, and opportunities directly in your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 rounded-lg border-2 border-gold-dark focus:outline-none"
          />
          <button className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
};

export default News;
