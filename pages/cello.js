import Head from 'next/head'
import PageLayout from '../components/PageLayout'
import CardItem from '../components/cards/CardItem'
import CardHeader from '../components/cards/CardHeader'
import ListBody from '../components/lists/ListBody'
import ListItem from '../components/lists/ListItem'

const Cello = () => {
    return (
        <>
            <Head>
                <meta name="robots" content="none"></meta>
                <link rel="canonical" href="https://denniseum.com/cello"></link>
            </Head>
            <PageLayout name="Cello">
                <p className="text-xl sm:text-2xl">
                    I have been playing solo cello for {new Date().getFullYear() - 2012} years and orchestral music for {new Date().getFullYear() - 2014} years. These are some of my notable achievements and favorite performances.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 md:mt-6">
                    <CardItem>
                        <CardHeader name="Awards">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </CardHeader>
                        <ListBody>
                            <ListItem name="Minnesota Orchestra Concerto Performing Invitation (2021)" href="https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/" />
                            <ListItem name="YPSCA Edwin W. and Edith B. Norberg Trust Award (2021)" href="https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/" />
                            <ListItem name="YPSCA Claire Givens Award (2021)" href="https://minnesotaorchestra.org/about/partnerships/ypsca/concerto-competition/" />
                            <ListItem name="Thursday Musical Artist Series Concert Performing Invitation (2021)" href="https://thursdaymusical.org/calendar/2021/2/8/thursday-musical-artist-series" />
                            <ListItem name="YPSCA Karen Lundmark Award (2020)" href="#" />
                            <ListItem name="Thursday Musical High School Strings: 1st place (2020)" href="https://thursdaymusical.org/scholarship-winners-2020/" />
                            <ListItem name="Salon Se Leve Solo Concerto Performing Invitation (2020)" href="#" />
                            <ListItem name="Classical MPR Varsity: Semi-finalist (2020)" href="https://www.classicalmpr.org/story/2020/01/02/minnesota-varsity-dennis-eum/" />
                            <ListItem name="Schubert Club Junior High Strings: 1st place (2019)" href="https://schubert.org/blog/2019/03/19/announcing-the-finalists-and-winners-from-the-2019-schubert-club-competition/" />
                            <ListItem name="Thursday Musical Junior High Strings: 2nd place (2019)" href="https://thursdaymusical.org/scholarship-winners-2019/" />
                            <ListItem name="GTCYS Cello Concerto Competition Finalist (2019)" href="#" />
                            <ListItem name="Mary West High School Division 1st: place (2019)" href="#" />
                            <ListItem name="Mary West Junior High Division: 1st place (2018)" href="#" />
                        </ListBody>
                    </CardItem>
                    <CardItem>
                        <CardHeader name="Recordings">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </CardHeader>
                        <ListBody>
                            <ListItem name="Elgar Concerto No. 1 in E minor, Movement IV" href="https://youtu.be/OUotKfMCwI0/" />
                            <ListItem name="Bach Suite No. 6, Sarabande" href="https://youtu.be/KRCsM28UyKw/" />
                            <ListItem name="Kabalevsky Concerto No. 1 in G minor, Movements I, II, III" href="https://youtu.be/aBuY__N0WyQ/" />
                            <ListItem name="Bach Suite No. 3, Sarabande" href="https://youtu.be/BWT0aoD4GMg/" />
                            <ListItem name="Saint-Saëns Concerto No. 1 in A minor, Movement I" href="https://youtu.be/g0yVZtesfM8/" />
                        </ListBody>
                    </CardItem>
                </div>
            </PageLayout>
        </>
    )
}

export default Cello
